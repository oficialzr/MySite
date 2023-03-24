from flask import Flask, render_template, request, flash
from flaskext.mysql import MySQL
from pymysql.cursors import DictCursor


app = Flask(__name__)



# DB SETTINGS
mysql = MySQL(cursorclass=DictCursor)
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'cuka009TV'
app.config['MYSQL_DATABASE_DB'] = 'zavl'
mysql.init_app(app)


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/services')
def services():
    conn = mysql.connect()
    cursor = conn.cursor()

    serv = cursor.execute('SELECT * FROM services')
    cursor.connection.commit()
    if serv > 0:
        services = cursor.fetchall()
        print(services)
        return render_template('services.html', services=services)


if __name__ == '__main__':
    app.run(debug=True)