// Dependencias
import React, { Component } from "react";
import { FaHamburger, FaHotdog } from "react-icons/fa";
import PropTypes from "prop-types";

// Componentes.

// Estilos.
import "./Column.scss";

// Definición del componente: <ColumnContainer />
class ColumnContainer extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);
  }

  // -- Ciclo de vida del componente.
  // -- Métodos.
  handleColumnType = () => {
    const { data } = this.props;

    const name = data[0];
    const value = data[1];

    if (name === "icono") {
      return (
        <div className="ColumnContainer_container-icon">
          <p className="ColumnContainer_title">{name}</p>
          <div className="ColumnContainer_valueContainer-icon">
            <p className="ColumnContainer_value-icon">
              {/* Aquí falta identificar el tipo de icono. */}
              <FaHamburger />
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="ColumnContainer_container">
        <p className="ColumnContainer_title">{data[0]}</p>
        <div className="ColumnContainer_valueContainer">
          <p className="ColumnContainer_value">{data[1]}</p>
        </div>
      </div>
    );
  };

  // -- Renderizado.
  render() {
    const { data } = this.props;

    return this.handleColumnType();
  }
}

// Proptypes.
ColumnContainer.proptypes = {
  data: PropTypes.array,
};

// Redux.

// Exportación.
export default ColumnContainer;
