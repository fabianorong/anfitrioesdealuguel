import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, CircularProgress, Alert, TextField, Button, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import "../styles/accommodations.scss";

const Listings = () => {
  const [acomodacoes, setAcomodacoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [city, setCity] = useState(searchParams.get("cidade") || "");
  const [favorites, setFavorites] = useState([]);
  const [searchCity, setSearchCity] = useState(city); 

  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("wishlist")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    const fetchAcomodacoes = async () => {
      setLoading(true);
      setError(null);
      
      let url = "http://localhost:5000/acomodacoes";
      if (city) {
        url += `?cidade=${encodeURIComponent(city)}`;
      }
  
      try {
        const res = await fetch(url);
        const data = await res.json();
        setAcomodacoes(data.acomodacoes);
      } catch (error) {
        setError("Não foi possível carregar as acomodações");
      }
      
      setLoading(false);
    };
  
    fetchAcomodacoes();
  }, [city]);
  

  const handleSearch = () => {
    setCity(searchCity); 
    setSearchParams(searchCity ? { cidade: searchCity } : {});
  };  

  
  const toggleFavorite = (acomo) => {
    let updatedFavorites = [...favorites];

    if (favorites.some((fav) => fav.id === acomo.id)) {
      updatedFavorites = updatedFavorites.filter((fav) => fav.id !== acomo.id);
    } else {
      updatedFavorites.push(acomo);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("wishlist", JSON.stringify(updatedFavorites));
  };

  if (loading) return <div className="loading-container"><CircularProgress /></div>;
  if (error) return <Alert severity="error" className="error-message">{error}</Alert>;

  return (
    <div className="accommodations-container">
      <h1>Acomodações Disponíveis</h1>

      {/* Search Filter */}
      <div className="search-bar">
      <TextField 
        label="Buscar por cidade" 
        variant="outlined" 
        value={searchCity} 
        onChange={(e) => setSearchCity(e.target.value)} 
        onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
      />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Buscar
        </Button>
      </div>

      {/* Listings */}
      <div className="list">
        {acomodacoes.length > 0 ? (
          acomodacoes.map((acomo) => (
            <Card key={acomo.id} className="accommodation-card">              
                <CardMedia component="img" height="140" image={acomo.imagem} alt={acomo.nome} />                
              
              <CardContent>
                <Link to={`/acomodacoes/${acomo.id}`} className="accommodation-link">
                  <Typography variant="h6">{acomo.nome}</Typography>
                  <Typography variant="body2" color="textSecondary">{acomo.localizacao}</Typography>
                  <Typography variant="subtitle1" className="price">R$ {acomo.preco_noite} / noite</Typography>
                </Link>
                <IconButton 
                  className="favorite-icon" 
                  onClick={() => toggleFavorite(acomo)}
                >
                  {favorites.some((fav) => fav.id === acomo.id) ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="h6">Nenhuma acomodação encontrada.</Typography>
        )}
      </div>
    </div>
  );
};

export default Listings;
