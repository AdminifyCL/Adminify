// Dependencias.
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
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
      <section className="indexPage_contenedor">
        <div className="indexPage_contenido">
          <h1>Inicio</h1>

          <Link to="login">
            <Button variant="contained">Entrar</Button>
          </Link>
        </div>
      </section>
    );
  }
}

// PropTypes.
IndexPage.propTypes = {};

// Exportación de la pagina: Index.
export default IndexPage;
