import pandas as pd
import numpy as np
import requests
import json
from scipy.spatial import distance_matrix
from haversine import haversine, Unit
from ortools.constraint_solver import routing_enums_pb2, pywrapcp

# Top 9 Parks: Load Datasets

# Load park location dateset
top_9_parks = pd.read_csv('../notebooks/final_9parks.csv')

# Optimized Model: Calculate Distance

# Function to calculate Haversine distance matrix
def calculate_haversine_matrix(locations):
    size = len(locations)
    distance_matrix = np.zeros((size, size))

    for i in range(size):
        for j in range(size):
            if i != j:
                distance_matrix[i][j] = haversine(locations[i], locations[j], unit=Unit.MILES)

    return distance_matrix

# Generate distance matrix
locations = list(zip(top_9_parks['latitude'], top_9_parks['longitude']))
distance_matrix = calculate_haversine_matrix(locations)

# Solving the TSP using OR-Tools

def solve_tsp_or_tools(distance_matrix):
    num_locations = len(distance_matrix)

    # Create routing index manager
    manager = pywrapcp.RoutingIndexManager(num_locations, 1, 0)

    # Create Routing Model
    routing = pywrapcp.RoutingModel(manager)

    def distance_callback(from_index, to_index):
        from_node = manager.IndexToNode(from_index)
        to_node = manager.IndexToNode(to_index)
        return int(distance_matrix[from_node][to_node] * 1000)

    transit_callback_index = routing.RegisterTransitCallback(distance_callback)

    # Allow to end at any node
    for node in range(1, num_locations):
        routing.AddVariableMinimizedByFinalizer(routing.NextVar(manager.NodeToIndex(node)))

    # Set parameters for the solver
    search_parameters = pywrapcp.DefaultRoutingSearchParameters()
    search_parameters.first_solution_strategy = routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC

    solution = routing.SolveWithParameters(search_parameters)

    # Get the route
    route = []
    index = routing.Start(0)
    while not routing.IsEnd(index):
        route.append(manager.IndexToNode(index))
        index = solution.Value(routing.NextVar(index))

    return route

route = solve_tsp_or_tools(distance_matrix)

# Ensure route indices are valid
if route is not None and all(idx < len(top_9_parks) for idx in route):
    # Reorder parks based on the optimal route
    optimal_parks = top_9_parks.iloc[route]

    # Print distances between each leg of the route
    total_distance = 0
    for i in range(len(optimal_parks) - 1):
        start_park = optimal_parks.iloc[i]
        end_park = optimal_parks.iloc[i + 1]
        distance = distance_matrix[route[i]][route[i + 1]]
        total_distance += distance

    # Function to calculate route for plotting
    def calculate_route_for_plotting(lat1, lon1, lat2, lon2):
        url = f"http://router.project-osrm.org/route/v1/driving/{lon1},{lat1};{lon2},{lat2}?overview=full&geometries=geojson"
        response = requests.get(url)
        data = response.json()
        route = data['routes'][0]['geometry']['coordinates']
        distance = data['routes'][0]['distance'] / 1000 * 0.621371  # Convert meters to miles
        return route, distance

# Prepare parks list
parks_data = {
    'parks': []
}

for i, (idx, park) in enumerate(optimal_parks.iterrows()):
    base_order = int(top_9_parks[top_9_parks['name'] == park['name']].index[0])
    
    parks_dict = {
        'name': park['name'],
        'description': park['description'],
        'longitude': park['longitude'],
        'latitude': park['latitude'],
        'area_km2': park['area_km2'],
        'base_order': base_order,
        'optimized_order': i + 1
    }

    # Append dictionary to list
    parks_data['parks'].append(parks_dict)

# Sort the dictionary by park name
parks_data['parks'] = sorted(parks_data['parks'], key=lambda x: x['name'])

# Write list to JSON file
with open('../data/parks_data.json', 'w') as json_file:
    json.dump(parks_data, json_file, indent=2)
    print('Data has been written to /data/parks_data.json')
