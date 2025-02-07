# from flask import Flask, jsonify, request
# from flask_cors import CORS


# app = Flask(__name__)
# CORS(app, origins=["http://localhost:3000"])

# # Mock database
# acomodacoes = [
#     {
#         "id": 1,
#         "nome": "Apartamento Beira-Mar",
#         "imagem": "https://www.mansoesflorianopolis.com.br/wp-content/uploads/venda-de-apartamentos-na-Beira-Mar-Norte-em-Florian%C3%B3polis.jpg",
#         "preco_noite": 356,
#         "localizacao": "Florianópolis, SC"
#     },
#     {
#         "id": 2,
#         "nome": "Pousada Encanto da Serra",
#         "imagem": "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
#         "preco_noite": 280,
#         "localizacao": "Gramado, RS"
#     },
#     {
#         "id": 3,
#         "nome": "Flat Luxo Centro",
#         "imagem": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww",
#         "preco_noite": 450,
#         "localizacao": "São Paulo, SP"
#     },
#     {
#         "id": 4,
#         "nome": "Chalé Montanha Azul",
#         "imagem": "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50fGVufDB8fDB8fHww",
#         "preco_noite": 320,
#         "localizacao": "Campos do Jordão, SP"
#     },
#     {
#         "id": 5,
#         "nome": "Resort Praia dos Sonhos",
#         "imagem": "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
#         "preco_noite": 550,
#         "localizacao": "Porto de Galinhas, PE"
#     }
# ]

# # Route to get all accommodations
# @app.route("/acomodacoes", methods=["GET"])
# def get_acomodacoes():
#     cidade = request.args.get("cidade", "").strip().lower()  # Obtém o parâmetro 'cidade' da URL
#     if cidade:
#         filtered_acomodacoes = [a for a in acomodacoes if cidade in a["localizacao"].lower()]
#     else:
#         filtered_acomodacoes = acomodacoes

#     return jsonify({"acomodacoes": filtered_acomodacoes})


# # Route to get a specific accommodation by ID
# @app.route("/acomodacoes/<int:id>", methods=["GET"])
# def get_acomodacao(id):
#     acomodacao = next((a for a in acomodacoes if a["id"] == id), None)
#     if acomodacao:
#         return jsonify(acomodacao)
#     return jsonify({"error": "Acomodação não encontrada"}), 404


# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=5000, debug=True)

