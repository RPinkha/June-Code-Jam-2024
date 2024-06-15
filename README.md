### June 2024 Code Jam - Park Sparks
![Alt Text](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/parksparks.png)

# Park Sparks : Optimal National Park Route

## Description

Park Sparks provides the optimal route to the most popular national parks, providing travlerers with the shortest and most efficient pathway for their summer adventure. Using advanced algorithms for geospatial analysis, data visualizations, and a user-friendly webpage, we ensure that you reach your destination quickly. Discover the most efficient and scenic route through America's natural treasures with Park Sparks!

## Design Structure
[Park Sparks](URL)

[Figma](URL)
[](URL)

## Key Technologies
-
-
-

## Setup Instructions

Follow these steps to set up the project locally:

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

This will write an updated final_9parks.csv file to /notebooks.

Next, from the root folder, cd into cd src/scripts/ and run `python export_data_to_json.py` to write an updated JSON file to /data.

This should update the existing JSON file in /data/parks_data.json. This JSON file is now ready to use as a JavaScript import, etc.

## Data Project

### Datasets used:

**nationparks.csv** - "The United States National Parks" - includes Name, Visitors, Date Established, Description and Area. 

https://www.kaggle.com/datasets/thedevastator/the-united-states-national-parks 

**us-national-parks.json** - "us-national-parks" - includes Longitutde, Latitude, park info and descripton. 

https://data.world/kevinnayar/us-national-parks

**final_9parks.csv** - Final cleaned .csv for [download](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/src/notebooks/final_9parks.csv) and use in the project.

- *name*: Name of National Park
- *visitors*: Number of annual visitors for 2021
- *description*: Provided description of the park
- *date_established*:
- *longitude*: Longitude coordinate of the park
- *latitude*: Latitude coordinate of the park
- *area_km2*: Total area of the park in square kilometers

The datasets were merged to conatin the above information for 63 national parks in the Unites States.The data underwent an initial preprocessing stage as part of an exploratory data analysis (EDA), during which they were carefully parsed, relabeled, and sorted. Additionally, corrections were made to ensure consistency in type and format.

Using the data, we found the 9 top most vistied parks, and from there plan out a route that is ordered by most-visited, or ideally, the Optimal Route.

## Top 9 National Parks:

|  # | Name                  | Visitors  | Date Established | Longitude | Latitude | Area km² |
|----|-----------------------|-----------|------------------|-----------|----------|----------|
|  0 | Great Smoky Mountains | 14161548  | 1934-06-15       | -83.53    | 35.68    | 2114.2   |
|  1 | Zion                  | 5039835   | 1919-11-19       | -113.05   | 37.30    | 595.9    |
|  2 | Yellowstone           | 4860242   | 1872-03-01       | -110.50   | 44.60    | 8983.2   |
|  3 | Grand Canyon          | 4532677   | 1919-02-26       | -112.14   | 36.06    | 4862.9   |
|  4 | Rocky Mountain        | 4434848   | 1915-01-26       | -105.58   | 40.40    | 1075.7   |
|  5 | Acadia                | 4069098   | 1919-02-26       | -68.21    | 44.35    | 198.6    |
|  6 | Grand Teton           | 3885230   | 1929-02-26       | -110.80   | 43.73    | 1254.7   |
|  7 | Yosemite              | 3287595   | 1890-10-01       | -119.50   | 37.83    | 3082.7   |
|  8 | Glacier               | 3081656   | 1910-05-11       | -114.00   | 48.80    | 4100.0   |

See text descriptions [here](URL)

![Top 9 Parks](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/graphs/top9parks.png)

![Date Established](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/graphs/date_est.png)

![Area Date Visitors](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/graphs/area_date_visitor_bubble.png)

![Area Visitors](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/graphs/area_visitors.png)

## Route Optimization Strategy


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
* Total distance: **11,121.51 miles**

**Optimal route model:**
* Total distance: **5,094.52 miles**

**Summary:**
* Total distance reduction: **6,026.99 miles**
* Percentage reduction in distance: **54.19%**

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
