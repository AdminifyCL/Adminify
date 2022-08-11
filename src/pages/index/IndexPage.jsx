// Dependencias.
import React from "react";
import PropTypes from "prop-types";
import { FaConciergeBell } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CardVersionList from "~components/CardVersionList/CardVersionList.jsx";

// Importación de estilos.
import "./IndexPage.scss";

// Definición de la pagina: Index.
const IndexPage = (props) => {
  // Estado y props.
  const { info } = props;

  // Renderizado visual.
  return (
    <section className="">
      <div className="">
        <h1>Index - Page</h1>
      </div>
    </section>
  );
};

// PropTypes.
IndexPage.propTypes = {
  info: PropTypes.object.isRequired,
};

// Exportación de la pagina: Index.
export default IndexPage;
