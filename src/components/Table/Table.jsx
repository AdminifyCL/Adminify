// Dependencias
import React, { Component } from "react";
import { FaUtensils } from "react-icons/fa";
import PropTypes from "prop-types";

// Componentes.
import RowContainer from "./Row/Row.jsx";
// FaConciergeBell FaUtensils

// Estilos.
import { Style, iconStyle } from "./Style.jsx";
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
        <FaUtensils style={iconStyle} />
        <h1 className="TableContainer_title">Parece que aún no agregas ningún producto</h1>
        <h2 className="TableContainer_subtitle">Prueba pulsando el botón agregar producto</h2>
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
