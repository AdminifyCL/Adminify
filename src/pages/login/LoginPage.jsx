// Dependencias.
import React, { Component } from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

// Importación de estilos.
import "./LoginPage.scss";

// Definición de la pagina: Index.
class LoginPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {};
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    console.log("[] LOGIN PAGE: componentDidUpdate");
    console.log("[] LOGGED: ", this.props.logged);
  }
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  handleUserLogin = async () => {
    console.log("[#️⃣][INFO][PAGE:LOGIN][handleUserLogin]");
    const { userLogin, logged } = this.props;

    // Datos de ejemplo.
    const datos = {
      email: "gonzalo@gmail.com",
      contraseña: "asd123",
    };

    // Iniciando la sesión del usuario.
    console.log("[] PRE-Logged: ", logged);
    await userLogin(datos);
    console.log("[] POST-Logged: ", logged);
  };
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    const { logged } = this.props;
    console.log("[] PAGE IS AUTH:", logged);

    return (
      <section className="contenedor">
        <div className="contenido">
          <div className="carta">
            <h1>Login</h1>
            <h2>email : gonzalo@gmail.com</h2>
            <h2>contraseña: asd123</h2>
          </div>

          <Button variant="contained" onClick={() => this.handleUserLogin()}>
            Iniciar sesión
          </Button>

          <h1>{logged ? <Navigate to="/caja" replace={false} /> : "No iniciaste sesión"}</h1>
        </div>
      </section>
    );
  }
}

// PropTypes.
LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
};

// Exportación de la pagina: Index.
export default LoginPage;
