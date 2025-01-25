from flask import Blueprint, request

home_routes = Blueprint('home_routes', __name__)
user_routes = Blueprint('user_routes', __name__)

@home_routes.route('/')
def homepage():
  return "<p>Test route, this will prompt on the homepage</p>"

@user_routes.route('/login', methods = ['GET', 'POST'])
def login():
  if request.method == 'POST':
    

@user_routes.route('/signup')
def signup():
  pass

@user_routes.route('/profile')
def profile():
  pass

