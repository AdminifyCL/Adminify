// Dependencias.
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Alerts from "../Alerts/Alerts.jsx";
import Auth from "../Auth/Auth.jsx";
import PropTypes from "prop-types";

// Action.
import generateAlert from "../../api/aplicacion/createAlert.js";
import { displayAlert } from "../../redux/slices/aplicacionSlice.js";

// Definición del componente: <LayoutContainer />
const LayoutContainer = (props) => {
  // 1. Manejo del estado.
  const { children, isPrivate } = props;
  const dispatch = useDispatch();

  // 2. Ciclo de vida.
  // 3. Metodos.
  const handlerNotification = async () => {
    const alertData = {
      type: "",
      title: "Testing message",
      message: "Testing Body message",
    };

    await generateAlert(alertData)
      .then((new_alert) => {
        dispatch(displayAlert(new_alert));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // 4. Renderizado.
  if (isPrivate) {
    return (
      <Alerts>
        <Auth>{children}</Auth>
      </Alerts>
    );
  }
  return <Alerts>{children}</Alerts>;
};

// PropTypes.
LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isPrivate: PropTypes.bool.isRequired,
};

// Exportación.
export default LayoutContainer;
