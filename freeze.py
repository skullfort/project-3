from flask_frozen import Freezer
from app import app

if __name__ == '__main__':
    app.config["FREEZER_BASE_URL"] = 'https://skullfort.github.io/project-3-demo/'
    freezer = Freezer(app)
    freezer.freeze()
