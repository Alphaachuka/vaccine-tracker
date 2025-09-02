from flask import Blueprint, request, jsonify
from db import get_db

medicines_bp = Blueprint("medicines", __name__)

# Get all medicines
@medicines_bp.route("/", methods=["GET"])
def get_medicines():
    db = get_db()
    medicines = db.execute("SELECT * FROM medicines").fetchall()
    return jsonify([dict(med) for med in medicines])

# Add new medicine
@medicines_bp.route("/", methods=["POST"])
def add_medicine():
    data = request.json
    name = data.get("name")
    description = data.get("description", "")

    db = get_db()
    db.execute("INSERT INTO medicines (name, description) VALUES (?, ?)", (name, description))
    db.commit()
    return jsonify({"message": "Medicine added successfully"}), 201

# Get a single medicine
@medicines_bp.route("/<int:medicine_id>", methods=["GET"])
def get_medicine(medicine_id):
    db = get_db()
    medicine = db.execute("SELECT * FROM medicines WHERE id = ?", (medicine_id,)).fetchone()
    if medicine:
        return jsonify(dict(medicine))
    return jsonify({"error": "Medicine not found"}), 404

# Update medicine
@medicines_bp.route("/<int:medicine_id>", methods=["PUT"])
def update_medicine(medicine_id):
    data = request.json
    name = data.get("name")
    description = data.get("description", "")

    db = get_db()
    db.execute("UPDATE medicines SET name = ?, description = ? WHERE id = ?", (name, description, medicine_id))
    db.commit()
    return jsonify({"message": "Medicine updated successfully"})

# Delete medicine
@medicines_bp.route("/<int:medicine_id>", methods=["DELETE"])
def delete_medicine(medicine_id):
    db = get_db()
    db.execute("DELETE FROM medicines WHERE id = ?", (medicine_id,))
    db.commit()
    return jsonify({"message": "Medicine deleted successfully"})
