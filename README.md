# Project 3

Group Members: Carly Yiao, GUSTAVO PIRES, RICHARD GU, TINA SARAVI, & VARUN VINODH


Last Update: 2023-04-2023

This repository presents an Interactive Dashboard with visualizations of Casual and Members of 2021-2022 and a Open-Map Visualization of Geospatial Biking Summary.

//The source files, [plots.js](static/plots.js) and [contacts.xlsx](Resources/contacts.xlsx), can be found in the `Resources` folder. Extraction and transformation of the source files using Python and Pandas are documented in [ETL_Mini_Project_MGu_CYiao.ipynb](ETL_Mini_Project_MGu_CYiao.ipynb). The transformed data, exported as CSV files, include [category.csv](Tables/category.csv), [subcategory.csv](Tables/subcategory.csv), [contacts.csv](Tables/contacts.csv), and [campaign.csv](Tables/category.csv). They are stored in the `Tables` folder, alongside an [entity relationship diagram](Tables/ERD.png) that depicts their relationships and a [database schema](Tables/crowdfunding_db_schema.sql) that can be used to import them into a PostgreSQL database. Note that the CSV files should be imported in the same order as those presented in the database schema to avoid errors in PostgreSQL. [Sample queries](Queries/crowdfunding_db_query.sql) to display the data from each imported table and screenshots of the results can be found in the `Queries` folder.//




## Workflow

- view https://open.toronto.ca/dataset/bike-share-toronto-ridership-data/ website for bike share raw data for 2021 and 2022 to download onto local computer. The file names are bikeshare-ridership-2021 and bikeshare-ridership-2022
- deposit downloaded files into the right folders into the [data](etl/data) file
- run ETL scrips individually located in the etl folder with the respective files [Extract.ipynb](etl/Extract.ipynb), [Load.ipynb](etl/Load.ipynb), [Transform_2021.ipynb](etl/Transform_2021.ipynb), and [Transform_2022.ipynb](etl/Transform_2022.ipynb)
- once ETL script are loaded, access file to put into MongoDB
- run flask app to render all HTML pages
