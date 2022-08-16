// Dependencias.
import React, { Component } from "react";
import {Button} from "@mui/material";
import PropTypes from "prop-types";

// Importación de estilos.
import "./IndexPage.scss";

// Definición de la pagina: Index.
class IndexPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {};
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    return (
      <section className="">
        <div className="">
          <h1>Inicio de sesión PayAdmin</h1>
          <Button variant="contained">Contained</Button>
        </div>
      </section>
    );
  }
}

// PropTypes.
IndexPage.propTypes = {};

// Exportación de la pagina: Index.
export default IndexPage;
