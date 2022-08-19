// Dependencias
import React, { Component } from "react";
import PropTypes from "prop-types";

// Componentes.
import RowContainer from "./Row/Row.jsx";

// Estilos.
import { Style } from "./Style.jsx";
import "./Table.scss";

// Definición del componente: <TableContainer />
class TableContainer extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  // -- Ciclo de vida del componente.
  // -- Métodos.
  mappingBanner = () => {
    return (
      <div style={Style}>
        <h1>No hay datos</h1>
      </div>
    );
  };

  mappingRows = () => {
    const { data } = this.props;

    return data.map((rowData, index) => {
      return <RowContainer key={index} data={rowData} />;
    });
  };

  // -- Renderizado.
  render() {
    const { data } = this.props;
    return (
      <div className="TableContainer_container">
        {/* Falta un metodo aquí para recorrer un arreglo de objetos. */}
        {data?.length > 0 ? this.mappingRows() : this.mappingBanner()}
      </div>
    );
  }
}

// Proptypes.
TableContainer.proptypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

// Redux.

// Exportación.
export default TableContainer;
