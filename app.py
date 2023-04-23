from flask import Flask, jsonify, render_template
from pymongo import MongoClient
import json
from bson.json_util import dumps

app = Flask(__name__)
mongo = MongoClient(port=27017)

# Mapping of a URL with a function
@app.route("/")
@app.route("/home")
def home():
    # Link the template with a specific route or URL, meaning that a specific template should be rendered or generated
    # whenever the user goes the corresponding URL.
    return render_template("home.html")

@app.route("/analysis")
def analysis():
    # Link the template with a specific route or URL, meaning that a specific template should be rendered or generated
    # whenever the user goes the corresponding URL.
    return render_template("analysis.html")

@app.route("/map")
def map():
    # Link the template with a specific route or URL, meaning that a specific template should be rendered or generated
    # whenever the user goes the corresponding URL.
    # return render_template("map.html")
    return render_template("map.html")

@app.route("/api/flowmap.json")
def flowmap():
    db = mongo['bst']
    flowmap = db['flowmap']
    return jsonify(json.loads(dumps(flowmap.find())))

@app.route("/api/summary.json")
def summary():
    db = mongo['bst']
    summary = db['summary']
    return jsonify(json.loads(dumps(summary.find())))

if __name__ == '__main__':
    app.run(debug=True)