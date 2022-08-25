// Dependencias.
import React, { Component } from "react";
import { Button, TextField, Alert, AlertTitle, Snackbar } from "@mui/material";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

// Importación de estilos.
import "./LoginPage.scss";

// Definición de la pagina: Index.
class LoginPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {
      redirectRegister: false,
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
  redirectToRegister = () => {
    this.setState({ redirectRegister: true });
  };

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
            error: "El correo es requerido",
          },
        });
      });
    }

    // Manejando los errores de contraseña.
    if (voidEmail) {
      this.setState({}, () => {
        this.setState({
          inputContraseña: {
            value: "",
            error: "La contraseña es requerida",
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
    console.log("[#️⃣][INFO][PAGE:LOGIN][handleUserLogin]");
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
      email,
      contraseña,
    };

    if (verificacion) {
      // Iniciando la sesión del usuario.
      await userLogin(datos);
    }
  };

  handleChange = (value) => {
    const inputId = value.target.id;
    const inputValue = value.target.value;

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
    const { userInfo } = this.props;
    const { redirectRegister, inputCorreo, inputContraseña, showAlert, messageAlert } = this.state;
    const { isAuthenticated } = userInfo;

    return (
      <section className="loginPage_contenedor">
        <div className="loginPage_contenido">
          {/* Inputs */}
          <div className="loginPage_formulario">
            <TextField
              id="inputCorreo"
              variant="filled"
              fullWidth={true}
              label="Correo"
              required={true}
              error={inputCorreo?.error ? true : false}
              helperText={inputCorreo.error}
              onChange={(event) => this.handleChange(event)}
              value={inputCorreo.value}
            />
            <TextField
              id="inputContraseña"
              variant="filled"
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

          {/* Botones */}
          <div className="loginPage_contendorBotones">
            <Button variant="contained" onClick={() => this.handleUserLogin()}>
              Iniciar sesión
            </Button>

            <Button variant="outlined" onClick={() => this.redirectToRegister()}>
              Registrarse
            </Button>
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
  userError: PropTypes.object,
};

// Exportación de la pagina: Index.
export default LoginPage;
