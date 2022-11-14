// Dependencias.
import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, Chip } from "@mui/material";
import Proptypes from "prop-types";

// Estilos.
import "./Formulario.scss";
import Styles from "./Formulario.styles.jsx";

// Definición del componente: <Formulario />.
const Formulario = (props) => {
  // 1. Manejo del estado.
  const { createUser } = props;
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [passError, setPassError] = useState(false);
  const [passLabel, setPassLabel] = useState("");

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleChange = (event) => {
    let id = event.target.id;
    let value = event.target.value;

    switch (id) {
      case "nombre":
        setNombre(value);
        break;

      case "apellido":
        setApellido(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "password2":
        setPassword2(value);
        break;

      default:
        break;
    }

    // Limpiar labels.
    setPassError(false);
    setPassLabel("");
  };

  const handleClearInputs = () => {
    setNombre("");
    setApellido("");
    setEmail("");
    setPassword("");
    setPassword2("");
  };

  const handleVoidInputs = () => {
    let inputs = [nombre, apellido, email, password, password2];
    let voidInputs = [];

    inputs.map((input) => {
      if (input === "") {
        voidInputs.push(input);
      }
    });

    return voidInputs.length > 0;
  };

  const handlePasswordMatch = () => {
    return password === password2;
  };

  const handlePasswordError = () => {
    setPassError(!handlePasswordMatch());
    setPassLabel("Las contraseñas no coinciden.");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      nombre,
      apellido,
      email,
      password,
      password2,
    };

    const resultVoid = handleVoidInputs();
    const resultMatch = handlePasswordMatch();

    console.log("[] DATA: ", data);
    console.log("[] RESULT VOID: ", resultVoid);
    console.log("[] RESULT MATCH: ", resultMatch);

    if (!resultMatch) {
      handlePasswordError();
    }

    if (!resultVoid && resultMatch) {
      // Registrar usuario.
      await createUser(data);

      handleClearInputs();
    }
  };

  // 4. Render.
  return (
    <form onSubmit={(event) => handleSubmit(event)} className="Formulario_container">
      {/* Input */}
      <div className="Formulario_inputContainer">
        <TextField
          value={nombre}
          onChange={(event) => handleChange(event)}
          variant="filled"
          color="secondary"
          placeholder="Nombre"
          fullWidth
          id="nombre"
          type="text"
          required
        />

        <TextField
          value={apellido}
          onChange={(event) => handleChange(event)}
          variant="filled"
          color="secondary"
          placeholder="Apellido"
          fullWidth
          id="apellido"
          type="text"
          required
        />

        <TextField
          value={email}
          onChange={(event) => handleChange(event)}
          variant="filled"
          color="secondary"
          placeholder="Email"
          fullWidth
          id="email"
          type="email"
          required
        />

        <TextField
          value={password}
          onChange={(event) => handleChange(event)}
          variant="filled"
          color="secondary"
          placeholder="Contraseña"
          fullWidth
          id="password"
          type="password"
          required
          error={passError}
          helperText={passLabel}
          FormHelperTextProps={{
            style: Styles.helperText,
          }}
        />

        <TextField
          value={password2}
          onChange={(event) => handleChange(event)}
          variant="filled"
          color="secondary"
          placeholder="Repetir Contraseña"
          fullWidth
          id="password2"
          type="password"
          required
        />

        <div className="Formulario_licenciaContainer">
          <TextField variant="filled" color="secondary" placeholder="Licencia" fullWidth disabled />

          <Chip label="Proximamente" variant="filled" color="secondary" />
        </div>
      </div>

      {/* Botones */}
      <div className="Formulario_buttonsContainer">
        <Button variant="contained" color="secondary" type="submit">
          Enviar
        </Button>
      </div>
    </form>
  );
};

// PropTypes.
Formulario.propTypes = {};

// Exportación.
export default Formulario;
