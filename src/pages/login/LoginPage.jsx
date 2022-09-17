// Dependencias.
import React, { useState, useEffect } from "react";
import { Button, TextField, Alert, AlertTitle, Snackbar, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FaAccessibleIcon, FaConciergeBell } from "react-icons/fa";
import PropTypes from "prop-types";
//import favicon.png
// Importación de estilos.
import "./LoginPage.scss";

// Definición de la pagina: <LoginPage />
const LoginPage = ({ userError, userLogin, userAuth, loading }) => {
  // -- Manejo del estado.
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [inputCorreo, setInputCorreo] = useState({ value: "", error: "" });
  const [inputContraseña, setInputContraseña] = useState({ value: "", error: "" });
  const { isAuthenticated } = userAuth;

  // -- Ciclo de vida.
  useEffect(() => {
    if (userError?.message) {
      setShowAlert(true);
      setMessageAlert(userError.message);
    }

    return () => {};
  }, [userError]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/caja");
    }
  }, [isAuthenticated]);

  // -- Metodos.
  const handleAlerts = () => {
    setShowAlert(false);
  };

  const handleUserError = (userError) => {
    if (userError?.error) {
      setShowAlert(true);
    }
  };

  const handleClearFields = () => {
    setInputCorreo({ value: "", error: false });
    setInputContraseña({ value: "", error: false });
  };

  const handleValidation = (email, contraseña) => {
    let voidEmail = email.length === 0;
    let voidContraseña = contraseña.length === 0;
    console.log("VOID:", voidEmail, voidContraseña);

    // Manejando los errores del correo.
    if (voidEmail) {
      setInputCorreo((prevState) => ({
        inputCorreo: {
          ...prevState,
          error: "El correo no puede estar vacio.",
        },
      }));
    }

    // Manejando los errores de contraseña.
    if (voidContraseña) {
      setInputContraseña({ value: "", error: "No puedes dejar este campo vacío" });
    }

    if (!voidEmail && !voidContraseña) {
      return true;
    }

    return false;
  };

  const handleUserLogin = async () => {
    console.log("[🛂][PAGE:LOGIN][handleUserLogin]");

    const email = inputCorreo.value;
    const contraseña = inputContraseña.value;

    // Validar los datos.
    const verificacion = handleValidation(email, contraseña);
    console.log("verificacion", verificacion);

    // Limpiar los campos.
    handleClearFields();

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

  const handleChange = (value) => {
    const inputId = value.target.id; // inputCorreo = ""
    const inputValue = value.target.value; // ""

    switch (inputId) {
      case "inputCorreo":
        setInputCorreo({ value: inputValue, error: false });
        break;

      case "inputContraseña":
        setInputContraseña({ value: inputValue, error: false });
        break;

      default:
        break;
    }
  };

  // -- Renderizado.
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
            onChange={(event) => handleChange(event)}
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
            onChange={(event) => handleChange(event)}
            value={inputContraseña.value}
          />
        </div>

        <div className="loginPage_recuperarContraseña">
          <Button onClick={() => navigate("/recuperar")} variant="text">
            ¿Haz olvidado tu contraseña? Recupérala aquí
          </Button>
        </div>

        {/* Botones */}
        <div className="loginPage_contendorBotones">
          <Button variant="contained" onClick={() => handleUserLogin()} disabled={loading}>
            Iniciar sesión
          </Button>

          <Button variant="outlined" disabled={loading} onClick={() => navigate("/registro")}>
            Registrarse
          </Button>
        </div>

        <div className="loginPage_alertContainer">
          <Snackbar
            open={showAlert}
            autoHideDuration={5000}
            onClose={() => handleAlerts()}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            {/* Alerta: Error al iniciar sesión */}
            <Alert severity="error" elevation={1} variant="filled">
              <AlertTitle>Error al iniciar sesión</AlertTitle>
              {messageAlert}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </section>
  );
};

// PropTypes.
LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
  userAuth: PropTypes.object,
  userError: PropTypes.object,
  loading: PropTypes.bool,
};

// Exportación de la pagina: Index.
export default LoginPage;
