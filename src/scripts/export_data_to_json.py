import pandas as pd
import numpy as np
import requests
import json
from scipy.spatial import distance_matrix
from haversine import haversine, Unit
from ortools.constraint_solver import routing_enums_pb2, pywrapcp

# Top 9 Parks: Load Datasets

# Load park location dateset
top_9_parks = pd.read_csv('../../notebook/final_9parks.csv')

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

    # Create the routing index manager
    manager = pywrapcp.RoutingIndexManager(num_locations, 1, 0)

    # Create Routing Model
    routing = pywrapcp.RoutingModel(manager)

    def distance_callback(from_index, to_index):
        from_node = manager.IndexToNode(from_index)
        to_node = manager.IndexToNode(to_index)
        return int(distance_matrix[from_node][to_node] * 1000)

    transit_callback_index = routing.RegisterTransitCallback(distance_callback)

    # Define cost of each arc
    routing.SetArcCostEvaluatorOfAllVehicles(transit_callback_index)

    for node in range(1, num_locations):
        routing.AddVariableMinimizedByFinalizer(routing.NextVar(manager.NodeToIndex(node)))

    # Setting first solution heuristic
    search_parameters = pywrapcp.DefaultRoutingSearchParameters()
    search_parameters.first_solution_strategy = (routing_enums_pb2.FirstSolutionStrategy.PATH_CHEAPEST_ARC)
    search_parameters.local_search_metaheuristic = routing_enums_pb2.LocalSearchMetaheuristic.GUIDED_LOCAL_SEARCH
    search_parameters.time_limit.seconds = 30  # Add a time limit for the search

    # Solve the problem
    solution = routing.SolveWithParameters(search_parameters)

    # Get the route
    route = []
    if solution:
        index = routing.Start(0)
        while not routing.IsEnd(index):
            route.append(manager.IndexToNode(index))
            index = solution.Value(routing.NextVar(index))

    return route

optimal_route = solve_tsp_or_tools(distance_matrix)

if optimal_route and all(idx < len(top_9_parks) for idx in optimal_route):
    optimal_parks = top_9_parks.iloc[optimal_route]

# Prepare parks list
parks_data = {
    'parks': []
}

# Hardcoded images dictionary
image_url_dict = {
    'Acadia': 'https://www.nps.gov/common/uploads/grid_builder/acad/crop16_9/502982C7-F441-2BDF-5FAF02A81C420E5E.jpg',
    'Glacier': 'https://www.nps.gov/common/uploads/grid_builder/glac/crop1_1/4DC1DCBC-1DD8-B71B-0B08B7CCA02198DE.jpg',
    'Grand Canyon': 'https://www.nps.gov/grca/planyourvisit/images/powell-pt-640.jpg',
    'Grand Teton': 'https://www.nps.gov/common/uploads/grid_builder/grte/crop16_9/1F0235E8-DC7D-04FB-828DB0F96362E536.jpg',
    'Great Smoky Mountains': 'https://www.nps.gov/common/uploads/grid_builder/grsm/crop16_9/82A2A8AA-DB85-E32F-A44F39F51C3052FB.jpg',
    'Rocky Mountain': 'https://www.nps.gov/common/uploads/grid_builder/romo/crop16_9/729AF759-EE25-2BE5-059D883B2F6B6F50.jpg',
    'Yellowstone': 'https://www.nps.gov/common/uploads/grid_builder/yell/crop16_9/1DC2A26C-9F15-26FA-6589D295CB04DB90.jpg',
    'Yosemite': 'https://www.nps.gov/common/uploads/grid_builder/yose/crop16_9/919529B5-1DD8-B71B-0B61F901E854111D.jpg',
    'Zion': 'https://www.nps.gov/common/uploads/grid_builder/zion/crop16_9/3F936BF4-1DD8-B71B-0B335232937DB252.jpg'
}

for i, (idx, park) in enumerate(optimal_parks.iterrows()):
    baseline_order = int(top_9_parks[top_9_parks['name'] == park['name']].index[0])
    
    parks_dict = {
        'name': park['name'],
        'description': park['description'],
        'longitude': park['longitude'],
        'latitude': park['latitude'],
        'area_km2': park['area_km2'],
        'image_url': image_url_dict.get(park['name'], ''),
        'baseline_order': baseline_order,
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
