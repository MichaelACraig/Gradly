from flask import Flask
from models import db
# from config import Config
from routes import home_routes, user_routes

# Flask app
app = Flask(__name__)

# Initialize SQLAlchemy
db.init_app(app)

# Routes blueprints from routes.py
app.register_blueprint(home_routes)
app.register_blueprint(user_routes, url_prefix="/user")

if __name__ == "__main__":
  app.run(debug=True)
  