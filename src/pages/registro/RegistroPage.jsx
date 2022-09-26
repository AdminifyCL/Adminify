// Dependencias.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { FaAccessibleIcon, FaConciergeBell } from "react-icons/fa";
import PropTypes from "prop-types";

// Importación de estilos.
import "./RegistroPage.scss";

// Definición de la pagina: <RegistroPage />
const RegistroPage = ({}) => {
  // -- Manejo del estado.
  // -- Ciclo de vida.
  // -- Metodos.
  // -- Renderizado.
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
          <Link to="/login">
            <Button className="registroPage_Volver" variant="outlined">
              Volver
            </Button>
          </Link>

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

// Exportación de la pagina: Index.
export default RegistroPage;
