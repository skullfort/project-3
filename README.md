# Bike Share Toronto: A Retrospect

Group Members: Carly Yiao, Gustavo Pires, Mingyao Gu, Tina Saravi, and Varun Vinodh


![](https://komarev.com/ghpvc/?username=skullfort&color=green&label=visits)

Last Update: 2023-04-24

Bike Share Toronto is a bike-sharing system that's been expanding since 2011. The aim of this project is to create interactive visualization tools that shed light on trends in ridership within the system one year after the launch of its 4-year growth plan (2022-2025). The web deloyment of these visualizations can be found [here](https://skullfort.github.io/bst-demo). The workflow for the project is documented as follows. 

## ETL

The ETL steps leading up to data import into MongoDB can be skipped if the user would like to directly build the web app for visualization.

### Extraction
- Download from [Bike Share Toronto Ridership Data](https://open.toronto.ca/dataset/bike-share-toronto-ridership-data/) the zip folders for 2021 and 2022. Create two folders named `2021` and `2022` inside the [data](etl/data/) folder. Unzip the downloaded folders and move the monthly CSV files into the folder that matches the year in the file names. Due to the size of these CSV files, they have not been included in this repository.
- Run [Extract.ipynb](etl/Extract.ipynb)
    - It calls [Bike Share Station API](https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information) for the latest station information, which can be exported to a JSON file called `station_info.json`. To match the visualizations seen on the web delpoyment, leave the part of the code that exports the JSON file commented out and use [station_info.json](etl/data/station_info.json) instead, which is used during transformation of data.
    - It creates a CSV file called `bst_ridership.csv` that combines all the monthly CSV files for each year.

### Transformation
- Run [Transform_2021.ipynb](etl/Transform_2021.ipynb) and [Transform_2022.ipynb](etl/Transform_2022.ipynb). Each notebook creates three JSON files, `trip_count_summary.json`, `avg_dur_summary.json`, and `staion_summary.json`, which summarize the key metrics for each year. In addition, [Transform_2022.ipynb](etl/Transform_2022.ipynb) creates [flowmap.json](etl/data/flowmap.json) in GeoJSON format for animated flow map.

### Load
- Run [Load.ipynb](etl/Load.ipynb) to combine all the summary data, which is exported as [data_summary.json](etl/data/data_summary.json).
- This is the step to start with if the user would like to skip data wrangling and directly jump into web deployment. Due to the unstructured data, MongoDB is used for loading and querying the data. With database connection established, navigate to the `data` folder and import [data_summary.json](etl/data/data_summary.json) and [flowmap.json](etl/data/flowmap.json) into the database:
    ```
    mongoimport --type json -d bst -c summary --drop --jsonArray data_summary.json
    mongoimport --type json -d bst -c flowmap --drop --jsonArray flowmap.json
    ```
## Flask
- Run [app.py](app.py) from the root directory to deploy the app locally.

## Frozen-Flask (Optional)
- Run [freeze.py](freeze.py) to freeze the Flask app into a set of static files. The files in the resulting `build` folder can be uploaded to Github for remote deployment.

Key findings of the project are detailed in our [presentation](docs/bike-share-final.pptx) to the USCS Data Analytics Boot Camp class on April 24, 2023.
