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

    this.state = {
      redirectRegister: false,
    };
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  redirectToRegister = () => {
    this.setState({ redirectRegister: true });
  };

  // -- Métodos [HANDLER].
  handleUserLogin = async () => {
    console.log("[#️⃣][INFO][PAGE:LOGIN][handleUserLogin]");
    const { userLogin } = this.props;

    // Datos de ejemplo.
    const datos = {
      email: "javier@gmail.com",
      contraseña: "asd123",
    };

    // Iniciando la sesión del usuario.
    await userLogin(datos);
  };
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    const { userInfo } = this.props;
    const { redirectRegister } = this.state;
    const { isAuthenticated } = userInfo;

    return (
      <section className="loginPage_contenedor">
        <div className="loginPage_contenido">
          <div className="loginPage_carta">
            <h1>Login</h1>
            <h2>email : gonzalo@gmail.com</h2>
            <h2>contraseña: asd123</h2>
          </div>

          <Button variant="contained" onClick={() => this.handleUserLogin()}>
            Iniciar sesión
          </Button>

          <Button variant="outlined" onClick={() => this.redirectToRegister()}>
            Registrarse
          </Button>

          {isAuthenticated ? "Autenticado" : "No autenticado"}
          {isAuthenticated ? <Navigate to="/caja" /> : null}
          {redirectRegister ? <Navigate to="/registro" /> : null}
        </div>
      </section>
    );
  }
}

// PropTypes.
LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
  userInfo: PropTypes.object,
};

// Exportación de la pagina: Index.
export default LoginPage;
