// Dependencias.
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import "./IndexPage.scss";

// Definición de la pagina.
const IndexPage = (props) => {
  // 1. Manejo de estados.
  const {} = props;
  const navigate = useNavigate();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <section className="indexPage_contenedor">
      <div className="indexPage_contenido">
        <div className="indexPage_titlecontent">
          <h1 className="indexPage_titlecontent-title">Adminify</h1>
        </div>

        <Button variant="contained" onClick={() => navigate("/login")}>
          Entrar
        </Button>
      </div>
    </section>
  );
};

// PropTypes.
IndexPage.propTypes = {};

// Exportación.
export default IndexPage;
