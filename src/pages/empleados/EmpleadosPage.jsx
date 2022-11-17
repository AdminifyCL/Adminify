// Dependencias.
import React, { useState, useEffect } from "react";
import { Button, TextField, Autocomplete, IconButton } from "@mui/material";
import { FaUserAlt, FaUserPlus, FaUserFriends, FaUserCog, FaUserTimes } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@mui/material/Modal";
import EmpleadosContainer from "./components/Empleados/EmpleadosContainer.jsx";
import Header from "./components/Header/Header.jsx";
import PropTypes from "prop-types";

// Estilos.
import "./EmpleadosPage.scss";

// Definición del componente: <EmpleadosPage />
const EmpleadosPage = (props) => {
  // 1. Manejo del estado.
  const { empleados } = props;
  const [numEmpleados, setNumEmpleados] = useState(0);

  // 2. Ciclo de vida.
  useEffect(() => {
    // Actualizar el numero de empleados.
    setNumEmpleados(empleados.length);
  }, []);

  // 3. Metodos.

  // 4. Render.
  return (
    <section className="empleadosPage_container">
      {/* Contenido de la página. */}
      <section className="empleadosPage_content">
        {/* Botones superiores */}
        <div className="empleadosPage_botones">
          <Header numEmpleados={numEmpleados} />
        </div>

        {/* Contenedores de empleados */}
        <div className="empleadosPage_listaEmpleados">
          <EmpleadosContainer listaEmpleados={empleados} />
        </div>
      </section>
    </section>
  );
};

// PropTypes.
EmpleadosPage.propTypes = {};

// Exportación.
export default EmpleadosPage;
