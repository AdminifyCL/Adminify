// Dependencias.
import React from "react";

// Importación de estilos.
import "./CardVersionList.scss";

// Importación de componentes.
import CardVersion from "~components/CardVersion/CardVersion.jsx";

// Definición del componente: <CardVersionList />.
const CardVersionList = () => {
  return (
    <div>
      <h1>CardVersionList</h1>
      <CardVersion />
    </div>
  );
};

// Exportación del componente: <CardVersionList />.
export default CardVersionList;
