from flask import Flask, render_template, request, flash
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)

# DB SETTINGS
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///zavl.db'
app.config['SECRET_KEY'] = 'samdkojqwhciuodjkcmdakfneowijfcaewmfkvwhafuhewojifpawo'

db = SQLAlchemy(app)

class Services(db.Model):
    service_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), unique=True)
    text = db.Column(db.String(1000), nullable=True)
    image = db.Column(db.String(200), nullable=True)


class Phones(db.Model):
    first_name = db.Column(db.String(100))
    phone_number = db.Column(db.String(40), unique=True, primary_key=True)



@app.route('/')
def index():
    return render_template("index.html")

@app.route('/services', methods=('GET', 'POST'))
def services():
    if request.method == 'POST':
        if len(request.form['phone_number']) not in (11, 12):
            flash('Некорректно введен телефон!', category='warning')
        else:
            try:
                result = request.form
                n = Phones(first_name=result['first_name'], phone_number=result['phone_number'])
                print('asd')
                db.session.add(n)
                db.session.flush()
                db.session.commit()
                flash('Мы вам скоро перезвоним :D', category='accept')
            except Exception as e:
                db.session.rollback()
                flash('Ой-ой! Произошла ошибка!', category='warning')
                print(e)
    services = Services.query.all()
    return render_template('services.html', services=services)


if __name__ == '__main__':
    app.run(debug=True)