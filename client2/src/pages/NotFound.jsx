import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "../styles/accommodations.scss";
import Navbar from "../components/Navbar";
import "../styles/List.scss";

const NotFound = () => {
  return (
    <>
    <Navbar/>
    <div className="accommodations-container">
      <h1 className="title-list">
        404 - Página Não Encontrada
      </h1>
      <h1 className="title-list">
        Ops! A página que você procura não existe.
      </h1>
      <div className="center-button-margin-top">
      <Button variant="contained" color="primary" component={Link} to="/">
        Voltar para Página inicial
      </Button>
      </div>
    </div>
    </>
  );
};

export default NotFound;
