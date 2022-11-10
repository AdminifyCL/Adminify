// Dependencias.
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { FaConciergeBell } from "react-icons/fa";
import { publicURL, privateURL } from "../../schemas/Navigation.js";
import PropTypes from "prop-types";

// Estilos.
import "./RegistroPage.scss";

// Definición del componente: <RegistroPage />
const RegistroPage = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const navigate = useNavigate();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <section className="registroPage_Contenedor">
      <section className="registroPage_Contenido">
        <div className="registroPage_icon">
          <FaConciergeBell />
        </div>
        <section className="registroPage_Titulo">
          <h1>Registro</h1>
        </section>
        <section className="registroPage_Formulario">
          <TextField id="inputNombre" fullWidth label="Nombre" variant="outlined" margin="dense" />
          <TextField
            id="inputApellido"
            fullWidth
            label="Apellido"
            variant="outlined"
            margin="dense"
          />
          <TextField
            id="inputEmail"
            type={"email"}
            fullWidth
            label="Email"
            variant="outlined"
            margin="dense"
          />
          <TextField
            id="inputPassword"
            type={"password"}
            fullWidth
            label="Contraseña"
            variant="outlined"
            margin="dense"
          />

          <TextField fullWidth label="Licencia" variant="outlined" margin="dense" />
        </section>

        {/* Botones de acción */}
        <section className="registroPage_ContenedorBotones">
          <Button
            className="registroPage_Volver"
            variant="outlined"
            onClick={() => navigate(publicURL.login)}
          >
            Volver
          </Button>

          <Button className="registroPage_CrearCuenta" variant="contained" onClick={() => {}}>
            Crea tu cuenta
          </Button>
        </section>
      </section>
    </section>
  );
};

// PropTypes.
RegistroPage.propTypes = {};

// Exportación.
export default RegistroPage;
