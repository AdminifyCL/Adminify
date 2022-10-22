// Dependencias.
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Navigation from "../../components/Navigation/Navigation.jsx";
import Categorias from "./components/Categorias/Categorias.jsx";
import handleDateMonth from "../../handlers/utiles/handleDateMonth.js";
import LicenciasContainer from "./components/Licencias/Licencias.jsx";
import PropTypes from "prop-types";

// Estilos.
import "./CuentaPage.scss";

// Definición del componente: <CuentaPage />
const CuentaPage = (props) => {
  // 1. Manejo del estado.
  const { userInfo } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleFecha = (dateAt) => {
    const timestamp = parseInt(dateAt);

    let fecha = new Date(timestamp);
    const month = handleDateMonth(fecha.getMonth());
    const fechaHumana = `${fecha.getDate()} de ${month} del ${fecha.getFullYear()}`;
    return fechaHumana;
  };

  // 4. Render.
  return (
    <section className="cuentaPage_container">
      {/* Navegación de la aplicación. */}
      <section className="cuentaPage_navigation">
        <Navigation />
      </section>

      {/* Vista de la caja. */}
      <section className="cuentaPage_content">
        {/* Mi cuenta. */}
        <div className="cuentaPage_miCuenta_container">
          {/* Banner. */}
          <div className="cuentaPage_miCuenta_banner">
            {/* Titulo y desc. */}
            <div className="cuentaPage_miCuenta_title">
              <h1>Mi Cuenta</h1>
              <p>
                Sección para editar las <strong>configuraciones</strong> de su cuenta.
              </p>
            </div>

            {/* Botón */}
            <div className="cuentaPage_miCuenta_button">
              <Button variant="contained">Editar cuenta</Button>
            </div>
          </div>

          {/* Contenido. */}
          <div className="cuentaPage_miCuenta_content">
            {/* Datos del usuario. */}
            <div className="cuentaPage_miCuenta_content_usuario">
              {/* Nombre y badge */}
              <div className="cuentaPage_miCuenta_content_usuario_nombre">
                <h1>{userInfo.username}</h1>
                <p>{userInfo.cargo}</p>
              </div>
              <p>{userInfo.email}</p>
            </div>

            {/* Fecha de creación. */}
            <div className="cuentaPage_miCuenta_content_creacion">
              <h1>Creación</h1>
              <p>{handleFecha(userInfo.createdAt)}</p>
            </div>

            {/* Fecha de conexión. */}
            <div className="cuentaPage_miCuenta_content_creacion">
              <h1>Ultima conexión</h1>
              <p>{handleFecha(userInfo.lastLoginAt?.seconds * 1000)}</p>
            </div>

            {/* Estado del correo. */}
            <div className="cuentaPage_miCuenta_content_creacion">
              <h1>Estado del correo</h1>
              <p>{userInfo.emailVerified ? "Verificado" : "No verificado"}</p>
            </div>

            {/* Licencia. */}
            <div className="cuentaPage_miCuenta_content_creacion">
              <h1>Licencia</h1>
              <p>{userInfo.licencia}</p>
            </div>
          </div>
        </div>

        {/* Categorias. */}
        <Categorias />

        {/* Licencia. */}
        <LicenciasContainer />

        {/* Interfaz. */}
        {/* <div>Interfaz</div> */}
      </section>
    </section>
  );
};

// PropTypes.
CuentaPage.propTypes = {};

// Exportación.
export default CuentaPage;
