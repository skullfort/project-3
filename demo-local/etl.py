import pandas as pd
from sqlalchemy import create_engine
from config import db_name

# A simple dataframe for demonstration purpose
def extract():
    countries = {'Domestic Health': [84241, 81832, 207917, 32947, 7312, 15215],
                 'Education': [68160, 130424, 144950, 52362, 9504, 21368],
                 'Final Consumption': [247409, 416043, 498433, 134626, 34940, 72704],
                 'Research and Development': [24918, 22573, 44736, 3806, 6608, 2909]}
    return pd.DataFrame(countries, index = ['australia', 'brazil', 'uk', 'mexico', 'singapore', 'southAfrica'] )

def load(df, table_name):
    engine = create_engine(f"sqlite:///{db_name}.sqlite")
    connection = engine.connect()
    df.to_sql(table_name, connection, if_exists='replace')

