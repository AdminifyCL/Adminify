// Dependencias.
import React, { Component } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Importación de estilos.
import "./CajaPage.scss";

// Definición de la pagina: Index.
class CajaPage extends Component {
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
  handleUserLogout = async () => {
    const { logout } = this.props;

    await logout();
  };

  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    const { userInfo } = this.props;

    console.log({ userInfo });
    return (
      <section className="">
        <div className="">
          <h1>Caja - Page</h1>

          {/* Temporal */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: 30,
              borderWidth: 2,
              borderStyle: "solid",
              borderColor: "black",
              padding: 5,
            }}
          >
            <h1 style={{ fontSize: "1rem" }}>EMAIL : {userInfo.email}</h1>
            <h2 style={{ fontSize: "1rem" }}>ID : {userInfo.uid}</h2>
            <h2 style={{ fontSize: "1rem" }}>
              isAuth : {userInfo.isAuthenticated ? "autenticado" : "no autenticado"}
            </h2>
          </div>

          {/* Cerrar sesión. */}
          <div>
            <Link to="/">
              <Button variant="contained" onClick={() => this.handleUserLogout()}>
                Cerrar sesión
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

// PropTypes.
CajaPage.propTypes = {
  logout: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
};

// Exportación de la pagina: Index.
export default CajaPage;
