### June 2024 Code Jam - Park Sparks

![Park Sparks](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/assets/parksparks_webpage.png)

# Park Sparks : Optimal National Park Route

## Description

Park Sparks provides the optimal route to the most popular national parks, providing travlerers with the shortest and most efficient pathway for their summer adventure. Using advanced algorithms for geospatial analysis, data visualizations, and a user-friendly webpage, we ensure that you reach your destination quickly. Discover the most efficient and scenic route through America's natural treasures with Park Sparks!

## Design Structure

[Figma](https://www.figma.com/design/odS8gABIYRzmXa7qBRb6eZ/JuneCodeJam%3A-ParkSparks?node-id=0-1&t=ZZvKbD4ke9s1d3nE-1)

## Webpage

[Park Sparks: Our Live Project](https://rpinkha.github.io/June-Code-Jam-2024/)

## Key Technologies

- HTML and CSS
- JavaScript and Node.js.
- Webpack and Babel
- Leaflet Library
- Deployed on gh-pages

## Setup Instructions

Follow these steps if you need to set up the project locally:

**Clone the Repository**

```bash
git clone https://github.com/RPinkha/June-Code-Jam-2024.git
cd June-Code-Jam-2024
npm install
npm run dev
```

Install requirments.txt to run .py and .ipynb files locally:

```bash
pip install -r requirements.txt
```

### Export Data to JSON

If the final parks dataset ever needs to be changed, run the cell in the .ipynb file in /notebooks:

```
top_9_parks.to_csv('final_9parks.csv', index=False)
```

This will write an updated final_9parks.csv file to /notebook.

Next, from the root folder, cd into cd src/scripts/ and run `python export_data_to_json.py` to write an updated JSON file to /data.

This should update the existing JSON file in /data/parks_data.json. This JSON file is now ready to use as a JavaScript import, etc.

## Data Project

**1. Data Collection and Selection:**

- Top 9 national parks were selected based on their high visitor counts in 2021.
- Relevant data such as park names, recreation visitors, locations, areas, and descriptions were collected and organized.

**2. Route Optimization:**

- Utilized geographical coordinates (longitude and latitude) of the selected parks to plan optimal routes.
- Selected the most popular ordered park route model, and the optimal route model

**3. Data Integration and Analysis:**

- Merged datasets including park information and location coordinates to facilitate comprehensive route mapping.
- Employed statistical analysis and data visualization techniques to present findings effectively.

### Datasets used:

**nationparks.csv** - "The United States National Parks" - includes Name, Visitors, Date Established, Description and Area.

https://www.kaggle.com/datasets/thedevastator/the-united-states-national-parks

**us-national-parks.json** - "us-national-parks" - includes Longitutde, Latitude, park info and descripton.

https://data.world/kevinnayar/us-national-parks

**final_9parks.csv** - Final cleaned .csv for [download](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/final_9parks.csv) and use in the project.

- _name_: Name of National Park
- _visitors_: Number of annual visitors for 2021
- _description_: Provided description of the park
- _date_established_:
- _longitude_: Longitude coordinate of the park
- _latitude_: Latitude coordinate of the park
- _area_km2_: Total area of the park in square kilometers

The datasets were merged to conatin the above information for 63 national parks in the Unites States.The data underwent an initial preprocessing stage as part of an exploratory data analysis (EDA), during which they were carefully parsed, relabeled, and sorted. Additionally, corrections were made to ensure consistency in type and format.

Using the data, we found the 9 top most vistied parks, and from there plan out a route that is ordered by most-visited, or ideally, the Optimal Route.

## Top 9 National Parks:

| #   | Name                  | Visitors | Date Established | Longitude | Latitude | Area km² |
| --- | --------------------- | -------- | ---------------- | --------- | -------- | -------- |
| 0   | Great Smoky Mountains | 14161548 | 1934-06-15       | -83.53    | 35.68    | 2114.2   |
| 1   | Zion                  | 5039835  | 1919-11-19       | -113.05   | 37.30    | 595.9    |
| 2   | Yellowstone           | 4860242  | 1872-03-01       | -110.50   | 44.60    | 8983.2   |
| 3   | Grand Canyon          | 4532677  | 1919-02-26       | -112.14   | 36.06    | 4862.9   |
| 4   | Rocky Mountain        | 4434848  | 1915-01-26       | -105.58   | 40.40    | 1075.7   |
| 5   | Acadia                | 4069098  | 1919-02-26       | -68.21    | 44.35    | 198.6    |
| 6   | Grand Teton           | 3885230  | 1929-02-26       | -110.80   | 43.73    | 1254.7   |
| 7   | Yosemite              | 3287595  | 1890-10-01       | -119.50   | 37.83    | 3082.7   |
| 8   | Glacier               | 3081656  | 1910-05-11       | -114.00   | 48.80    | 4100.0   |

See Nation Park text descriptions [here](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/assets/Top9Parks_descriptions.txt)
<img src="https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/assets/top9parks.png" alt="Top 9 Parks" style="width:800px;"/>
This map marks the locations of the top 9 national parks in the United States, chosen by highest visitor count. Providing a straightforward way to visualize the geographic distribution of the parks across the country. The geographic distribution of these top parks shows a concentration in the western United States, reflecting the region's larger wilderness areas.

<img src="https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/assets/date_est.png" alt="Date Established" style="width:800px;"/>
This line chart visualizes the establishment dates of the top 9 national parks in the United States. Each point on the line represents a national park, ordered chronologically from Yellowstone (established in 1872) to Great Smoky Mountains (established in 1934). Based on the plot, three parks (Grand Canyon, Acadia, and Zion) were all established in 1919. There is a significant increase in the number of national parks established during the early 20th century, highlighting a period of heightened conservation efforts and national park creation.

<img src="https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/assets/area_date_visitor_bubble.png" alt="Area Date Visitors" style="width:800px;"/>
This bubble chart plots the area (in km²) of the national parks against their establishment dates. The size of each bubble represents the number of visitors, and the colors differentiate the parks. Larger bubbles indicate parks with higher visitor counts. The chart is useful for those interested in exploring national parks and historical sites.

<img src="https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/assets/area_visitors.png" alt="Area Visitors" style="width:800px;"/>

Above is a bubble map of the top national parks on a map of the US, where the size of the marker represents the area of the park and the color represents the number of visitors. This serves as a geographic frame of reference of park locations and their sizes across the country. Larger parks in the west like Yellowstone and Grand Canyon not only have substantial areas but also attract a good number of visitors. In contrast, some smaller parks in the east also see high visitor numbers. However, Great Smoky Mountians sees the most visitors while being the middle in terms of size.

## Route Optimization Strategy

Below are conclusions based on the different routing strategies and distance calculation techniques used:

**Haversine Distance Calculation**
The Haversine formula is useful for calculating the great-circle distance between two points on the Earth's surface, which is an approximation of the shortest distance over the Earth's surface. Ideal for quick distance estimations and initial route planning when exact road distances are not required.

**OSRM (Open Source Routing Machine) API**
OSRM is used to calculate realistic driving routes based on road networks, considering actual driving conditions, road restrictions, and traffic data. Essential for detailed travel planning and navigation, ensuring that the routes are practical and follow real-world constraints.

**Traveling Salesman Problem (TSP) Solved with OR-Tools**
The TSP finds the shortest possible route that visits each location exactly once and returns to the origin point. This is particularly useful for optimizing travel routes to minimize distance or time. Utilized for optimal route planning in various scenarios such as logistics, delivery services, and efficient trip planning.

## Route Models

## Most-Visited Ordering Route Model:

![Most Visited Route](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/graphs/most_visitied_route.png)

### Most-Visited Ordering Route Model Results:

Great Smoky Mountains to Zion: 2006.39 miles

Zion to Yellowstone: 669.13 miles

Yellowstone to Grand Canyon: 888.91 miles

Grand Canyon to Rocky Mountain: 733.79 miles

Rocky Mountain to Acadia: 2282.76 miles

Acadia to Grand Teton: 2604.23 miles

Grand Teton to Yosemite: 869.78 miles

Yosemite to Glacier: 1066.51 miles

**Total Distance: 11121.51 miles**

## Optimzed Route Model:

For optimal route planning, the **Traveling Salesman Problem (TSP)** is solved. A one-way trip scenario, where the route spans from a starting point to a destination without returning to the origin.This problem finds the shortest route visiting each location exactly once, applicable to various real-world scenarios such as delivery services and supply chain management for efficient routing.

To optimize the route, a **distance matrix** is crucial. This matrix calculates pairwise distances between geographic points, represented by latitude and longitude coordinates. Each element in the matrix denotes the distance between two locations, adding efficient route planning by providing insights into travel distances and optimal sequencing of stops.

![Optimal Route](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/graphs/optimal_route.png)

### Optimized Route Results:

Great Smoky Mountains to Acadia: 1005.25 miles

Acadia to Glacier: 2163.04 miles

Glacier to Yellowstone: 334.15 miles

Yellowstone to Grand Teton: 61.92 miles

Grand Teton to Yosemite: 610.41 miles

Yosemite to Zion: 355.07 miles

Zion to Grand Canyon: 99.41 miles

Grand Canyon to Rocky Mountain: 465.25 miles

**Total Distance: 5094.52 miles**

## Route Conclusions:

**First route model:**

- Total distance: **11,121.51 miles**

**Optimal route model:**

- Total distance: **5,094.52 miles**

**Summary:**

- Total distance reduction: **6,026.99 miles**
- Percentage reduction in distance: **54.19%**

The optimized route model significantly improves efficiency by reducing the total distance traveled by **54.19%**, saving **6,026.99** miles compared to the first route model. This demonstrates the effectiveness of the route optimization.

## Conclusion

The optimized route highlights improvements in travel efficiency. By analyzing and restructuring the travel itinerary, the optimized route achieves a significant reduction in the total distance covered, directly translating to potential savings in travel time, fuel costs, and overall trip expenses.

The first route, covering 11,121.51 miles, illustrates the extensive journey required when following a non-optimized path. In contrast, **the optimized route reduces the travel distance to 5,094.52 miles**, **By reducing the total travel distance by over 50%**.

Implicit outcomes include:

- **Economic Benefits:** The significant reduction in miles translates to lower fuel consumption and reduced vehicle wear and tear, leading to considerable cost savings for travelers.
- **Environmental Impact:** Fewer miles traveled means a reduction in carbon emissions, contributing positively to environmental conservation efforts.
- **Enhanced Travel Experience:** Shorter travel distances allow more time to be spent enjoying the destinations rather than on the road, enhancing the overall travel experience.

This optimization not only achieves the primary goal of route efficiency but also provides a comprehensive approach to more sustainable and enjoyable travel. It underscores the value of optimization techniques in achieving practical and impactful results.

### Members:

[Andrew Huang - Data Scientist](https://github.com/andytron)

[Christian To - Software Engineer](https://github.com/ChristianSTo)

[Ruven Pinkhasov - Software Engineer](https://github.com/RPinkha)

[Zoey Espinoza - Data Scientist](https://github.com/zoeyespinoza)
