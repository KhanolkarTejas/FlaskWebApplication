from flask import Flask , render_template, url_for,request,redirect
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root@localhost/anpr'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)

class Users(db.Model):
    user_name = db.Column(db.String, nullable=False)
    age =  db.Column(db.Integer, nullable=False)
    user_contact =  db.Column(db.Integer, unique=True, nullable=False)


@app.route('/create_db')
def create_database():
    db.create_all()
    return 'Database created!'

@app.route('/')
def index():
    return render_template('home.html')
@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register',methods=['GET','POST'])
def register():
    if request.method=="GET":
        return render_template('register.html')
    else:
        name=request.form.get('user_name')
        contact=request.form.get('user_contact')
        age=request.form.get('age')

        entry = Users(user_name=name,age=age,user_contact=contact)

        db.session.add(entry)
        db.session.commit()


        return redirect('/login')

if __name__=="__main__":
    app.run(debug=True)

    