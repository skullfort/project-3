from flask import Flask, jsonify, render_template
from sqlalchemy import create_engine
from etl import extract, load
from config import db_name

app = Flask(__name__)
engine = create_engine(f"sqlite:///{db_name}.sqlite")

# Mapping of a URL with a function
@app.route("/")
def index():
    # Link the template with a specific route or URL, meaning that a specific template should be rendered or generated
    # whenever the user goes the corresponding URL.
    return render_template("index.html")

@app.route("/api/pdata.json")
def pdata():
    results = engine.execute("SELECT * FROM pdata")
    return jsonify([dict(_) for _ in results])

if __name__ == '__main__':
    df = extract()
    load(df, 'pdata')
    app.run(debug=True)