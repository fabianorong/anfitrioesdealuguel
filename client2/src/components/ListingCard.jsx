const ListingCard = ({ id, nome, imagem, localizacao, preco_noite }) => {
    return (
      <div className="listing-card">
        <img src={imagem} alt={nome} className="listing-image" />
        <h2>{nome}</h2>
        <p>{localizacao}</p>
        <p className="price">R$ {preco_noite} / noite</p>
      </div>
    );
  };
  
  export default ListingCard;
  