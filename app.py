from flask import Flask, render_template, request, flash
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

# DB SETTINGS
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///zavl.db'

db = SQLAlchemy(app)

class Services(db.Model):
    service_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), unique=True)
    text = db.Column(db.String(1000), nullable=True)
    image = db.Column(db.String(200), nullable=True)



@app.route('/')
def index():
    return render_template("index.html")

@app.route('/services')
def services():
    services = Services.query.all()
    return render_template('services.html', services=services)


if __name__ == '__main__':
    app.run(debug=True)