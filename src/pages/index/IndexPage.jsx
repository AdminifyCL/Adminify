// Dependencias.
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { FaCube } from "react-icons/fa";
import PropTypes from "prop-types";

// Importación de estilos.
import "./IndexPage.scss";

// Definición de la pagina: <IndexPage />.
const IndexPage = ({}) => {
  // -- Manejo del estado.
  const navigate = useNavigate();

  // -- Ciclo de vida.
  // -- Metodos.

  // -- Renderizado.
  return (
    <section className="indexPage_contenedor">
      <div className="indexPage_contenido">
        <div className="indexPage_titlecontent">
          <FaCube className="indexPage_titlecontent-icon" />
          <h1 className="indexPage_titlecontent-title">Pay Admin Box</h1>
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

// Exportación de la pagina: Index.
export default IndexPage;
