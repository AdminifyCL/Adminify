// Dependencias
import React, { Component } from "react";
import PropTypes from "prop-types";

// Componentes.

// Estilos.
import "./Column.scss";

// Definición del componente: <ColumnContainer />
class ColumnContainer extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);
    console.log("[] PROPS");
    console.log(this.props);
  }

  // -- Ciclo de vida del componente.
  // -- Métodos.

  // -- Renderizado.
  render() {
    const { data } = this.props;
    return (
      <div className="ColumnContainer_container">
        <p className="ColumnContainer_title">{data[0]}</p>
        <div className="ColumnContainer_valueContainer">
          <p className="ColumnContainer_value">{data[1]}</p>
        </div>
      </div>
    );
  }
}

// Proptypes.
ColumnContainer.proptypes = {
  data: PropTypes.array,
};

// Redux.

// Exportación.
export default ColumnContainer;
