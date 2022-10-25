// Dependencias.
import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import PropTypes from "prop-types";
import { Button, TextField, Autocomplete, IconButton } from "@mui/material";
import { FaUserAlt, FaUserPlus, FaUserFriends, FaUserCog, FaUserTimes } from "react-icons/fa";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// Estilos.
import "./EmpleadosPage.scss";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    boxShadow: 24,
    padding: "80px 32px  40px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

// Definición del componente: <EmpleadosPage />
const EmpleadosPage = (props) => {
  // 1. Manejo del estado.
  const {} = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const mostrarCuadro = () => {
    setVisible(!visible);
  };

  const [modal, setModal] = useState(false);
  const abrirCerrarModal = () => {
    setModal(!modal);
  };

  const roles = () => ["empleado", "administrador", "dueño"];

  const styles = useStyles();
  const body = (
    <div className="modalEmpleados">
      <div className="modal_titulos">
        <h2>Agregar un empleado</h2>
        <h4>Complete los siguientes datos</h4>
      </div>

      <div className="modal_formulario">
        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        <TextField id="outlined-basic" label="Correo electrónico" variant="outlined" />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={roles()}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Rol" />}
        />
      </div>
      <div className="modal_botones">
        <Button variant="contained">agregar empleado</Button>
        <Button variant="outlined" onClick={() => abrirCerrarModal()}>
          cerrar
        </Button>
      </div>
    </div>
  );

  // 4. Render.
  return (
    <section className="empleadosPage_container">
      {/* Navegación de la aplicación. */}

      <section className="empleadosPage_navigation">
        <Navigation />
      </section>
      <div className="empleadosPage_boton">
        <h1>Administracion de empleados</h1>
        <div className="empleadosPage_contadorEmpleados">
          <h4>
            <FaUserFriends size="3vh"></FaUserFriends> Cantidad de empleados:{" "}
          </h4>
        </div>
        <Button variant="contained" onClick={() => abrirCerrarModal()}>
          agregar empleado <FaUserPlus size="3vh" position></FaUserPlus>
        </Button>
      </div>
      <Modal open={modal} onClose={abrirCerrarModal}>
        {body}
      </Modal>
      {/* Vista del empleado. */}
      <section className="empleadosPage_content">
        <div className="empleadosPage_contenedorDatos">
          <div className="empleadosPage_contenedorIcono">
            <p>
              <FaUserAlt size="8vh" position></FaUserAlt>
            </p>
          </div>
          <div className="empleadosPage_contenedorString">
            <h3>nombre</h3>
            <h3>mail</h3>
            <h4>rol</h4>
          </div>
          <div className="empleadosPage_contenedorBotonesEmpleado">
            <IconButton aria-label="config" size="small">
              <FaUserCog fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="small">
              <FaUserTimes fontSize="inherit" />
            </IconButton>
          </div>
        </div>
        {/* <section className="empleadosPage_contenedorDatosPrueba">
          <h3>nombre</h3>
          <h3>mail</h3>
          <h3>rol</h3>
        </section>
        <section className="empleadosPage_contenedorDatosPrueba2">
          <h3>nombre</h3>
          <h3>mail</h3>
          <h3>rol</h3>
        </section>
        <div className="empleadosPage_contenedorDatosPrueba3">
          <h3>nombre</h3>
          <h3>mail</h3>
          <h3>rol</h3>
        </div> */}
      </section>
    </section>
  );
};

// PropTypes.
EmpleadosPage.propTypes = {};

// Exportación.
export default EmpleadosPage;
