// Dependencias
import React, { Component } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

// Componentes.
import Column from "../Column/Column.jsx";

// Estilos.
import "./Row.scss";

// Definición del componente: <RowContainer />
class RowContainer extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);
  }

  // -- Ciclo de vida del componente.
  // -- Métodos.
  mappingColumns = () => {
    const { data } = this.props;

    return Object.entries(data).map((columnData, index) => {
      return <Column key={index} data={columnData} />;
    });
  };

  // -- Renderizado.
  render() {
    return (
      <div className="RowContainer_container">
        {/* Contenido de la fila */}
        {this.mappingColumns()}

        {/* Botones de edición y eliminación */}
        <div className="RowContainer_container-buttons">
          <Button variant="contained">Editar</Button>
          <Button variant="outlined">Eliminar</Button>
        </div>
      </div>
    );
  }
}

// Proptypes.
RowContainer.proptypes = {};

// Redux.

// Exportación.
export default RowContainer;
