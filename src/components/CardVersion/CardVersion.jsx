// Dependencias.
import React from "react";
import PropTypes from "prop-types";
import { Chip } from "@mui/material";
import { CircularProgress } from "@mui/material";

// Importación de estilos.
import "./CardVersion.scss";

// Importación de componentes.

// Definición del componente: <CardVersion />.
const CardVersion = (props) => {
  // Estado y props.
  const { data } = props;

  // Renderizado.
  return (
    <div className="container-cardVersion">
      <div className="container-cardVersion-title">
        <div className="container-cardVersion-titleinfo">
          <h1>{data.title}</h1>
          <p>{data.date}</p>
        </div>
        <Chip label={data.version} color="primary"></Chip>
      </div>
      <img src={data.img.imgSrc} alt={data.img.imgAlt} />
      <p>{data.description}</p>
    </div>
  );
};

// Prop types.
CardVersion.propTypes = {
  data: PropTypes.object,
};

// Exportación del componente: <CardVersion />.
export default CardVersion;
