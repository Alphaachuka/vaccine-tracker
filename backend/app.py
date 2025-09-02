from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

from extensions import mail
from routes_auth import auth_bp

load_dotenv()

def create_app():
    app = Flask(__name__)

    # ✅ Enable CORS for your frontend origin with proper methods/headers
    CORS(app, resources={
        r"/*": {
            "origins": "http://localhost:5173",
            "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization"]
        }
    })

    # Mail config
    app.config.update(
        MAIL_SERVER=os.getenv('MAIL_SERVER', 'smtp.gmail.com'),
        MAIL_PORT=int(os.getenv('MAIL_PORT', 587)),
        MAIL_USE_TLS=os.getenv('MAIL_USE_TLS', 'True').lower() == 'true',
        MAIL_USERNAME=os.getenv('MAIL_USERNAME'),
        MAIL_PASSWORD=os.getenv('MAIL_PASSWORD'),
        MAIL_DEFAULT_SENDER=os.getenv('MAIL_DEFAULT_SENDER'),
        SECRET_KEY=os.getenv('SECRET_KEY', 'dev-secret-key')
    )

    mail.init_app(app)

    # ✅ Register auth blueprint at /auth
    app.register_blueprint(auth_bp, url_prefix='/auth')

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, port=5000)
