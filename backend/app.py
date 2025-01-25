from flask import Flask
from routes import home_routes, user_routes

app = Flask(__name__)

app.register_blueprint(home_routes)
app.register_blueprint(user_routes, url_prefix="/user")

if __name__ == "__main__":
  app.run(debug=True)
  