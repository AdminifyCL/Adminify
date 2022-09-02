// Dependencias.
import React, { Component } from "react";
import { Button, TextField, Alert, AlertTitle, Snackbar, CircularProgress } from "@mui/material";
import { Navigate, Link } from "react-router-dom";
import { FaAccessibleIcon, FaConciergeBell } from "react-icons/fa";
import PropTypes from "prop-types";
//import favicon.png
// Importación de estilos.
import "./LoginPage.scss";

// Definición de la pagina: Index.
class LoginPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {
      showAlert: false,
      messageAlert: "",

      inputCorreo: {
        value: "",
        error: false,
      },
      inputContraseña: {
        value: "",
        error: false,
      },
    };
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    const { userError } = this.props;
    const { userError: prevUserError } = prevProps;

    if (userError !== prevUserError) {
      this.setState({
        showAlert: true,
        messageAlert: userError.message,
      });
    }
  }
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].

  // -- Métodos [HANDLER].
  handleAlerts = () => {
    this.setState({ showAlert: false });
  };

  handleUserError = (userError) => {
    if (userError?.error) {
      this.setState({ showAlert: true });
    }
  };

  handleClearFields = () => {
    this.setState({
      inputCorreo: {
        value: "",
        error: false,
      },
      inputContraseña: {
        value: "",
        error: false,
      },
    });
  };

  handleValidation = (email, contraseña) => {
    let voidEmail = email.length === 0;
    let voidContraseña = contraseña.length === 0;

    // Manejando los errores del correo.
    if (voidEmail) {
      this.setState({}, () => {
        this.setState({
          inputCorreo: {
            value: "",
            error: "No puedes dejar este campo vacío",
          },
        });
      });
    }

    // Manejando los errores de contraseña.
    if (voidContraseña) {
      this.setState({}, () => {
        this.setState({
          inputContraseña: {
            value: "",
            error: "No puedes dejar este campo vacío",
          },
        });
      });
    }

    if (!voidEmail && !voidContraseña) {
      return true;
    }

    return false;
  };

  handleUserLogin = async () => {
    console.log("[🛂][PAGE:LOGIN][handleUserLogin]");
    const { userLogin } = this.props;
    const { inputCorreo, inputContraseña } = this.state;

    const email = inputCorreo.value;
    const contraseña = inputContraseña.value;

    // Validar los datos.
    const verificacion = this.handleValidation(email, contraseña);

    // Limpiar los campos.
    this.handleClearFields();

    // Datos de ejemplo.
    const datos = {
      email: email,
      contraseña: contraseña,
    };

    if (verificacion) {
      // Iniciando la sesión del usuario.
      await userLogin(datos);
    }
  };

  handleChange = (value) => {
    const inputId = value.target.id; // inputCorreo = ""
    const inputValue = value.target.value; // ""

    this.setState({
      [inputId]: {
        value: inputValue,
        error: false,
      },
    });
  };

  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    const { userAuth, loading } = this.props;
    const { inputCorreo, inputContraseña, showAlert, messageAlert } = this.state;
    const { isAuthenticated } = userAuth;

    return (
      <section className="loginPage_contenedor">
        <div className="loginPage_contenido">
          {/* TITULO E IMAGEN */}

          <div className="loginPage_icon">
            <FaConciergeBell />
          </div>

          <div className="loginPage_titulo">
            <h1>Pay Admin Box</h1>
          </div>

          <div className="loginPage_subtitulo">
            <h2>Inicio de sesión</h2>
          </div>

          {/* Inputs */}
          <div className="loginPage_formulario">
            <TextField
              id="inputCorreo"
              variant="outlined"
              fullWidth={true}
              label="Correo electrónico"
              required={true}
              error={inputCorreo?.error ? true : false}
              helperText={inputCorreo.error}
              onChange={(event) => this.handleChange(event)}
              value={inputCorreo.value}
            />
            <TextField
              id="inputContraseña"
              variant="outlined"
              fullWidth={true}
              label="Contraseña"
              type="password"
              required={true}
              error={inputContraseña?.error ? true : false}
              helperText={inputContraseña.error}
              onChange={(event) => this.handleChange(event)}
              value={inputContraseña.value}
            />
          </div>

          <div className="loginPage_recuperarContraseña">
            <Link to="/recuperar">
              <p className="loginPage_recuperarContraseña-text">
                ¿Haz olvidado tu contraseña? Recupérala aquí
              </p>
            </Link>
          </div>

          {/* Botones */}
          <div className="loginPage_contendorBotones">
            <Button variant="contained" onClick={() => this.handleUserLogin()} disabled={loading}>
              {loading ? <CircularProgress color="secondary" /> : "Iniciar sesión"}
            </Button>

            <Link to="/registro">
              <Button variant="outlined" disabled={loading}>
                Registrarse
              </Button>
            </Link>
          </div>

          <div className="loginPage_alertContainer">
            <Snackbar
              open={showAlert}
              autoHideDuration={5000}
              onClose={() => this.handleAlerts()}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              {/* Alerta: Error al iniciar sesión */}
              <Alert severity="error" elevation={1} variant="filled">
                <AlertTitle>Error al iniciar sesión</AlertTitle>
                {messageAlert}
              </Alert>
            </Snackbar>
          </div>

          {/* Esto podria cambiarse */}
          {isAuthenticated ? <Navigate to="/caja" /> : null}
        </div>
      </section>
    );
  }
}

// PropTypes.
LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
  userAuth: PropTypes.object,
  userError: PropTypes.object,
  loading: PropTypes.bool,
};

// Exportación de la pagina: Index.
export default LoginPage;
