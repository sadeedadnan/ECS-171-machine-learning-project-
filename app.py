import os
import pickle
import json
import numpy as np
from cities import getCoord

from flask import Flask, request, render_template, jsonify


app = Flask(__name__)

model = pickle.load(open('api_model.pkl', 'rb'))

@app.route('/')
def home():
    return render_template("index.html")


@app.route('/predict', methods=['POST'])
def predict():
    """There will multiple predict endpoints, one for each model
    """
    print("Predict Endpoint Hit")
    data = json.loads(request.json)
    print(type(data))
    print(data)
    city = data["city"]
    bedrooms = int(data["bedroom"])
    baths = int(data["bathroom"])
    interior = int(data["interior"])
    ele = int(data["elementary"])
    middle = int(data["middle"])
    high = int(data["high"])
    tax_assessed = int(data["taxA"])
    annual_tax = int(data["annTax"])
    lat, long = getCoord(city)
    value_list = [bedrooms, baths, interior,
                  ele, middle, high,
                  tax_assessed, annual_tax,
                  lat, long]
    
    prediction = model.predict([np.array(value_list)])
    prediction = prediction[0]
    print(prediction)
    prediction = "${:,.2f}".format(prediction)
    print(prediction)
    response = {
        "success": True,
        "answer": prediction
    }
    
    return jsonify(response)

    
if __name__ == "__main__":
    app.run(debug=True)