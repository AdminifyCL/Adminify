// Dependencias.
import React from "react";
import { TextField, Button } from "@mui/material";
import { FaConciergeBell } from "react-icons/fa";
import { Link } from "react-router-dom";

// Importación de estilos.
import "./LoginPage.scss";

// Definición de la pagina: Index.
const LoginPage = () => {
  // Renderizado visual.
  return (
    <section className="loginPage_container_page">
      {/* Contenedor del Formulario.*/}
      <section className="loginPage_container_form">
        {/* Formulario de inicio de sesión */}
        <form className="loginPage_form">
          {/* Banner: titulo y texto */}
          <div className="loginPage_form_banner">
            <FaConciergeBell className="loginPage_form_banner_icon" />
            <h1>PAYADMIN</h1>
          </div>

          {/* Input de texto */}
          <div className="loginPage_form_textInput">
            <p>Inicio de sesión</p>
            <TextField
              variant="filled"
              label="Usuario"
              type="text"
              required={true}
              className="loginPage_form_textInput-username"
              id="input_username"
            />

            <TextField
              variant="filled"
              label="Contraseña"
              type="password"
              required={true}
              className="loginPage_form_textInput-username"
              id="input_username"
            />
            <p>¿Olvidaste tu contraseña?</p>
          </div>

          {/* Botón, ingresar */}
          <div className="loginPage_form_btn">
            <Link to="/caja">
              <Button variant="contained">Ingresar</Button>
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
};

// Exportación de la pagina: Index.
export default LoginPage;
