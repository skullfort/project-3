# Project 3

Group Members: Carly Yiao, Gustavo Pires, Richard Gu, Tina Saravi, & Varun Vinodh


Last Update: 2023-04-22

This repository presents an Interactive Dashboard with visualizations of Casual and Members of 2021-2022 and a Open-Map Visualization of Geospatial Biking Summary.


## Workflow

- view https://open.toronto.ca/dataset/bike-share-toronto-ridership-data/ website for bike share raw data for 2021 and 2022 to download onto local computer. The file names are bikeshare-ridership-2021 and bikeshare-ridership-2022
- deposit downloaded files into the right folders into the [data](etl/data) file
- run ETL scrips individually located in the etl folder with the respective files [Extract.ipynb](etl/Extract.ipynb), [Load.ipynb](etl/Load.ipynb), [Transform_2021.ipynb](etl/Transform_2021.ipynb), and [Transform_2022.ipynb](etl/Transform_2022.ipynb)
- once ETL script are loaded, access file to put into MongoDB
- run flask app to render all HTML pages
