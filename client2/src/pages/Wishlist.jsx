import React, { useState, useEffect } from "react";
import { Card, CardMedia, CardContent, Typography, IconButton, Button } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "../styles/List.scss";
import Navbar from "../components/Navbar";

const Wishlist = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("wishlist")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("wishlist", JSON.stringify(updatedFavorites));
  };

  return (
    <>
    <Navbar />
    
    <div className="accommodations-container">
      <h1 className="title-list">Favoritos</h1>

      {favorites.length > 0 ? (
        <div className="list">
          {favorites.map((acomo) => (
            <Card key={acomo.id} className="accommodation-card">
              <CardMedia component="img" height="140" image={acomo.imagem} alt={acomo.nome} />
              <CardContent>
                <Link to={`/accommodations/${acomo.id}`} className="accommodation-link">
                  <Typography variant="h6">{acomo.nome}</Typography>
                  <Typography variant="body2" color="textSecondary">{acomo.localizacao}</Typography>
                  <Typography variant="subtitle1" className="price">R$ {acomo.preco_noite} / noite</Typography>
                </Link>
                <IconButton onClick={() => removeFavorite(acomo.id)}>
                  <Favorite color="error" />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        
        <h1 className="title-list">Nenhuma acomodação na lista de desejos.</h1>
        
      )}
    
    <div className="center-button">
  <Button variant="contained" color="primary" component={Link} to="/acomodacoes">
    Voltar para Acomodações
  </Button>
</div>
      </div>    
    
    </>
  );
};

export default Wishlist;
