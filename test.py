import os
from flask import Flask,render_template, request,redirect,flash, url_for
from flask_mysqldb import MySQL
from configDB import configure_database
from vehicles import vehicle_routes
from werkzeug.utils import secure_filename
from routes import execute_routes


UPLOAD_FOLDER = 'vehicle_images'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

configure_database(app=app)

mysql = MySQL(app)

execute_routes(app,render_template,request,mysql,redirect,url_for)
 
if __name__=="__main__":
    app.run(debug=True)