// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import RegistroPage from "../../pages/registro/RegistroPage.jsx";

// Actions.
import createUsuario from "../../api/usuarios/createUsuario.js";
import { displayAlert, deleteAlert } from "../../redux/slices/aplicacionSlice.js";

// Definición del contenedor: <RegistroContainer />.
const RegistroContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const dispatch = useDispatch();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleRegistro = async (data) => {
    await createUsuario(data)
      .then((response) => {
        dispatch(
          displayAlert({
            type: "success",
            title: "Usuario creado",
            message: "Se creo el usuario correctamente.",
          })
        );
      })
      .catch((error) => {
        dispatch(
          displayAlert({
            type: "error",
            title: "Error",
            message: "No se pudo crear el usuario",
          })
        );
      });
  };

  // 4. Render.
  return <RegistroPage createUser={handleRegistro} />;
};

// PropTypes.
RegistroContainer.propTypes = {};

// Exportación.
export default RegistroContainer;
