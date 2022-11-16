// Dependencias.
import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import "./Formulario.scss";
import Styles from "./Formulario.styles.jsx";

// Definición del componente: <Formulario />
const Formulario = (props) => {
  // 1. Manejo del estado.
  const { toRegister, toForgot, login, toCarga } = props;

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState("");

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación de los datos.
    if (email.length === 0) {
      setEmailError("El campo no puede estar vacio");
      return;
    } else if (pass.length === 0) {
      setPassError("El campo no puede estar vacio");
      return;
    }

    // Enviar los datos a la api.
    let data = {
      email: email,
      password: pass,
    };

    clearInputs();

    const response = await login(data)
      .then((response) => {
        console.log("[] promise:", response);
        return response;
      })
      .catch((error) => {
        console.log("[] error", error);
      });

    if (!response.error) {
      toCarga();
    }
  };

  const handleChanges = (event) => {
    let new_value = event.target.value;
    let input_id = event.target.id;

    if (input_id === "email") {
      setEmail(new_value);
    } else {
      setPass(new_value);
    }

    // Limpiar los errores.
    clearErrors();
  };

  const clearErrors = () => {
    setEmailError("");
    setPassError("");
  };

  const clearInputs = () => {
    setEmail("");
    setPass("");
  };

  // 4. Render.
  return (
    <form className="FormularioLogin_container" onSubmit={(event) => handleSubmit(event)}>
      {/* Input */}
      <div className="FormularioLogin_inputContainer">
        <TextField
          id="email"
          variant="filled"
          color="secondary"
          placeholder="Email"
          type="email"
          label="Ingrese su Email"
          fullWidth
          required
          inputProps={{
            minLength: 3,
            style: Styles.input,
          }}
          FormHelperTextProps={{
            style: Styles.errorText,
          }}
          helperText={emailError}
          value={email}
          onChange={(event) => handleChanges(event)}
        />
        <TextField
          id="password"
          variant="filled"
          color="secondary"
          placeholder="Contraseña"
          type="password"
          label="Ingrese su contraseña"
          fullWidth
          required
          inputProps={{
            minLength: 3,
            style: Styles.input,
          }}
          FormHelperTextProps={{
            style: Styles.errorText,
          }}
          helperText={passError}
          value={pass}
          onChange={(event) => handleChanges(event)}
        />
      </div>

      {/* Olvidaste tu contraseña */}
      <div className="FormularioLogin_forgetContainer">
        <Button variant="text" color="secondary" onClick={() => toForgot()}>
          ¿Olvidaste tu contraseña?
        </Button>
      </div>

      {/* Buttons */}
      <div className="FormularioLogin_buttonContainer">
        <Button
          variant="outlined"
          type="button"
          color="secondary"
          onClick={() => toRegister()}
          style={{ minWidth: "40%", flexGrow: 1 }}
        >
          Registrarse
        </Button>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={() => {}}
          style={{ minWidth: "50%", flexGrow: 2 }}
        >
          Entrar
        </Button>
      </div>
    </form>
  );
};

// Proptypes.
Formulario.propTypes = {};

// Exportación.
export default Formulario;
