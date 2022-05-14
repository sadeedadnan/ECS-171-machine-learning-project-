import os
import pickle

from flask import Flask, render_template, request


app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")


@app.route('/predict', methods=['POST'])
def predict():
    """There will multiple predict endpoints, one for each model
    """
    return "Hello For Now"

    
if __name__ == "__main__":
    app.debug = True
    app.run()