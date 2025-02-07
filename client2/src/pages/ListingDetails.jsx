import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, CircularProgress, Alert, Button } from "@mui/material";
import "../styles/ListingDetails.scss";
import Navbar from "../components/Navbar";

const ListingDetails = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/acomodacoes/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Acomodação não encontrada.");
        }
        return res.json();
      })
      .then((data) => {
        setAccommodation(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="loading-container">
        <CircularProgress />
      </div>
    );

  if (error)
    return (
      <>
        <Navbar />
        <div className="accommodation-detail-container">
          <Alert severity="error" className="error-message">
            {error}
          </Alert>
          <div className="back-button-container" style={{ marginTop: "20px", textAlign: "center" }}>
            <Link to="/acomodacoes">
              <Button variant="contained" color="primary">
                Voltar para Acomodações
              </Button>
            </Link>
          </div>
        </div>
      </>
    );

  return (
    <>
      <Navbar />
      <div className="accommodation-detail-container">
        <Card className="accommodation-detail-card">
          <CardMedia
            component="img"
            height="300"
            image={accommodation.imagem}
            alt={accommodation.nome}
          />
          <CardContent>
            <Typography variant="h4">{accommodation.nome}</Typography>
            <Typography variant="body1">{accommodation.localizacao}</Typography>
            <Typography variant="h6" className="price">
              R$ {accommodation.preco_noite} / noite
            </Typography>
            <Link to="/acomodacoes">
              <Button variant="contained" color="primary" className="back-button">
                Voltar
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ListingDetails;
