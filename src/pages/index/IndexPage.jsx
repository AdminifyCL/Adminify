// Dependencias.
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaCube } from "react-icons/fa";
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
          <div className="indexPage_titlecontent">
            <FaCube className="indexPage_titlecontent-icon" />
            <h1 className="indexPage_titlecontent-title">Pay Admin Box</h1>
          </div>

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
