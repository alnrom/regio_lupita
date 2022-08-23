import pandas as pd
from flask import Flask, jsonify, render_template
from flask_talisman import Talisman

app = Flask(__name__)
csp = {
    'default-src': '\'self\''
}
Talisman(app)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=False)