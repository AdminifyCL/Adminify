// Dependencias.
import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import Styles from "./FormCliente.styles.jsx";
import "./FormCliente.scss";

// Definición del componente: <FormCliente />
const FormCliente = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <section className="pagosPage_Clientecontenedor">
      <section className="pagosPage_ClienteContenido">
        <div className="pagosPage_ClienteCabecera">
          <p> Nuevo cliente </p>
        </div>
        <div className="pagosPage_ClienteFormulario">
          <TextField
            id="inputNombreCliente"
            fullWidth
            label="Nombre"
            variant="filled"
            margin="dense"
          />
          <TextField
            id="inputCorreoCliente"
            fullWidth
            label="Correo"
            variant="filled"
            margin="dense"
          />
          <TextField
            id="inputNumeroCliente"
            fullWidth
            label="Número telefónico"
            variant="filled"
            margin="dense"
          />
        </div>
        <div className="pagosPage_ClienteBoton">
          <Button
            onClick={() => {
              alert("Cliente guardado con éxito");
            }}
            variant="contained"
          >
            Guardar
          </Button>
        </div>
      </section>
    </section>
  );
};

// PropTypes.
FormCliente.propTypes = {};

// Exportación.
export default FormCliente;
