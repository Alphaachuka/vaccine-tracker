# backend/routes_auth.py
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models import get_user_by_email, create_user

auth_bp = Blueprint("auth_bp", __name__, url_prefix="/auth")

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    confirm_password = data.get("confirm_password")

    # Validate required fields
    if not username or not email or not password or not confirm_password:
        return jsonify({"error": "All fields are required"}), 400

    # Check password match
    if password != confirm_password:
        return jsonify({"error": "Passwords do not match"}), 400

    # Check if user exists
    if get_user_by_email(email):
        return jsonify({"error": "Email already registered"}), 409

    # Optional: enforce minimum password length / characters
    if len(password) < 6:
        return jsonify({"error": "Password must be at least 6 characters"}), 400

    # Hash password
    hashed_password = generate_password_hash(password)

    # Create user
    try:
        create_user(username, email, hashed_password)
        return jsonify({"message": "User registered successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    user = get_user_by_email(email)
    if not user or not check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid email or password"}), 401

    return jsonify({"message": f"Welcome {user['username']}!"}), 200
