from flask import Flask, jsonify, render_template
from pymongo import MongoClient
import json
from bson.json_util import dumps

app = Flask(__name__)
mongo = MongoClient(port=27017)

# Mapping of a URL with a function
@app.route("/")
def index():
    # Link the template with a specific route or URL, meaning that a specific template should be rendered or generated
    # whenever the user goes the corresponding URL.
    return render_template("index.html")
    # return 'Welcome!'

@app.route("/api/summary.json")
def summary():
    db = mongo['bst']
    summary = db['summary']
    return jsonify(json.loads(dumps(summary.find())))

if __name__ == '__main__':
    app.run(debug=True)