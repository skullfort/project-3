# Project 3

Group Members: Carly Yiao, GUSTAVO PIRES, RICHARD GU, TINA SARAVI, & VARUN VINODH


Last Update: 2023-03-23

This repository presents an Extract, Transform, and Load (ETL) pipeline for a database of 1000 sample crowdfunding projects.

The source files, [crowdfunding.xlsx](Resources/crowdfunding.xlsx) and [contacts.xlsx](Resources/contacts.xlsx), can be found in the `Resources` folder. Extraction and transformation of the source files using Python and Pandas are documented in [ETL_Mini_Project_MGu_CYiao.ipynb](ETL_Mini_Project_MGu_CYiao.ipynb). The transformed data, exported as CSV files, include [category.csv](Tables/category.csv), [subcategory.csv](Tables/subcategory.csv), [contacts.csv](Tables/contacts.csv), and [campaign.csv](Tables/category.csv). They are stored in the `Tables` folder, alongside an [entity relationship diagram](Tables/ERD.png) that depicts their relationships and a [database schema](Tables/crowdfunding_db_schema.sql) that can be used to import them into a PostgreSQL database. Note that the CSV files should be imported in the same order as those presented in the database schema to avoid errors in PostgreSQL. [Sample queries](Queries/crowdfunding_db_query.sql) to display the data from each imported table and screenshots of the results can be found in the `Queries` folder.

Individually, Carly was responsible for the ETL of the category and subcategory data, and Mingyao was responsible for the ETL of the contact data using both Python dictionary methods amd regular expressions. The rest of the project was done together as a team.
