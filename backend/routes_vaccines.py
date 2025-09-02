from flask import Blueprint, request, jsonify
from db import get_db

vaccines_bp = Blueprint("vaccines", __name__)

# Get all vaccines
@vaccines_bp.route("/", methods=["GET"])
def get_vaccines():
    db = get_db()
    vaccines = db.execute("SELECT * FROM vaccines").fetchall()
    return jsonify([dict(vac) for vac in vaccines])

# Add new vaccine
@vaccines_bp.route("/", methods=["POST"])
def add_vaccine():
    data = request.json
    name = data.get("name")
    doses_required = data.get("doses_required")

    db = get_db()
    db.execute("INSERT INTO vaccines (name, doses_required) VALUES (?, ?)", (name, doses_required))
    db.commit()
    return jsonify({"message": "Vaccine added successfully"}), 201

# Get a single vaccine
@vaccines_bp.route("/<int:vaccine_id>", methods=["GET"])
def get_vaccine(vaccine_id):
    db = get_db()
    vaccine = db.execute("SELECT * FROM vaccines WHERE id = ?", (vaccine_id,)).fetchone()
    if vaccine:
        return jsonify(dict(vaccine))
    return jsonify({"error": "Vaccine not found"}), 404

# Update vaccine
@vaccines_bp.route("/<int:vaccine_id>", methods=["PUT"])
def update_vaccine(vaccine_id):
    data = request.json
    name = data.get("name")
    doses_required = data.get("doses_required")

    db = get_db()
    db.execute("UPDATE vaccines SET name = ?, doses_required = ? WHERE id = ?", (name, doses_required, vaccine_id))
    db.commit()
    return jsonify({"message": "Vaccine updated successfully"})

# Delete vaccine
@vaccines_bp.route("/<int:vaccine_id>", methods=["DELETE"])
def delete_vaccine(vaccine_id):
    db = get_db()
    db.execute("DELETE FROM vaccines WHERE id = ?", (vaccine_id,))
    db.commit()
    return jsonify({"message": "Vaccine deleted successfully"})
