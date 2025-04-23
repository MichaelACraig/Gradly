from flask import Flask
from config import Config
from flask_cors import CORS
from routes import home_routes, user_routes

# Flask app
app = Flask(__name__)

# CORS Compliance
CORS(app)

# Loads config w/ MongoDB URI
app.config.from_object(Config)

# Routes blueprints from routes.py
app.register_blueprint(home_routes)
app.register_blueprint(user_routes, url_prefix="/user")

if __name__ == "__main__":
  app.run(debug=True)
  