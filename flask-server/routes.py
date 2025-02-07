from flask import Blueprint, jsonify, request
from data import acomodacoes  

api = Blueprint("api", __name__)

@api.route("/acomodacoes", methods=["GET"])
def get_acomodacoes():
    cidade = request.args.get("cidade", "").strip().lower()
    if cidade:
        filtered = [a for a in acomodacoes if cidade in a["localizacao"].lower()]
    else:
        filtered = acomodacoes
    return jsonify({"acomodacoes": filtered})


@api.route("/acomodacoes/<int:id>", methods=["GET"])
def get_acomodacao(id):
    acomodacao = next((a for a in acomodacoes if a["id"] == id), None)
    if acomodacao:
        return jsonify(acomodacao)
    return jsonify({"error": "Acomodação não encontrada"}), 404