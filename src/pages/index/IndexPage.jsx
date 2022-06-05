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
    <section className="container">
      {/* Contenido Izquierda: Registro de cambios.*/}
      <section className="container-registro">
        {/* Contenido titular. */}
        <section className="container-header">
          {/* Icono & Emblema de versión. */}
          <div className="container-title">
            {/* Icono. */}
            <FaConciergeBell className="container-title_icon" />

            {/* Titulos. */}
            <div className="container-titles">
              <h1>{info?.appName.toUpperCase() || "😵"}</h1>
              <h2>Registro de cambios</h2>
            </div>
          </div>

          {/* Badge */}
          <div className="container-badge">
            <h3>v{info?.appVersion.toUpperCase() || "😵"}</h3>
          </div>
        </section>

        {/* Contenido de cartas */}
        <section className="container-cardlist">
          {/* Lista de versiones. */}
          <CardVersionList />
        </section>
      </section>

      {/* Contenido Derecha: Botón de entrada. */}
      <section className="container-boton">
        <div className="container-boton_btn">
          <Link to="login">
            <Button variant="contained" color="secondary">
              Iniciar sesión
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
};

// PropTypes.
IndexPage.propTypes = {
  info: PropTypes.object.isRequired,
};

// Exportación de la pagina: Index.
export default IndexPage;
