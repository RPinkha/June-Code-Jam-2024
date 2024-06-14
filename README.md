### June 2024 Code Jam - Park Sparks
![Alt Text](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/notebook/parksparks.png)

# Park Sparks : Optimal National Park Route

## Description

Park Sparks provides the optimal route to the most popular national parks, providing travlerers with the shortest and most efficient pathway for their summer adventure. Using advanced algorithms for geospatial analysis, data visualizations, and a user-friendly webpage, we ensure that you reach your destination quickly. Discover the most efficient and scenic route through America's natural treasures with Park Sparks!

## Design Structure
[Project](URL)

[Figma](URL)
[](URL)

## Key Technologies

## Setup Instructions

Follow these steps to set up the project locally:

**Clone the Repository**
   ```bash
   git clone https://github.com/RPinkha/June-Code-Jam-2024.git
   cd June-Code-Jam-2024
   npm install
   npm run dev
bash '''

  



### Datasets used:

**nationparks.csv** - "The United States National Parks" - includes Name, Visitors, Date Established, Description and Area. 

https://www.kaggle.com/datasets/thedevastator/the-united-states-national-parks 

**us-national-parks.json** - "us-national-parks" - includes Longitutde, Latitude, park info and descripton. 

https://data.world/kevinnayar/us-national-parks

**final_9parks.csv** - Final cleaned .csv for [download](https://github.com/RPinkha/June-Code-Jam-2024/blob/main/src/scripts/final_9parks.csv) and use in the project.

- *name*: Name of National Park
- *visitors*: Number of annual visitors for 2021
- *description*: Provided description of the park
- *date_established*:
- *longitude*: Longitude coordinate of the park
- *latitude*: Latitude coordinate of the park
- *area_km2*: Total area of the park in square kilometers

The datasets were merged to conatin the above information for 63 national parks in the Unites States.The data underwent an initial preprocessing stage as part of an exploratory data analysis, during which they were carefully parsed and relabeled. Additionally, corrections were made to ensure consistency in type and format.

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

## Route Optimization Strategy


## Most-Visited Ordering Route Model:
### ost-Visited Ordering Route Model Results:


## Optimzed Route Model:

### Optimized Route Results:


## Conclusion



### Members:

[Andrew - Data Scientist](URL)

[Christian To - Software Engineer](https://github.com/ChristianSTo)

[Ruven Pinkhasov - Software Engineer](https://github.com/RPinkha)

[Zoey Espinoza - Data Scientist](https://github.com/zoeyespinoza)
