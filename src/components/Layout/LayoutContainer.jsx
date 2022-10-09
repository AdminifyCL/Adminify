// Dependencias.
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import NotificationsContainer from "../Notifications/Notifications.jsx";

// Action.
import generateAlert from "../../api/app/createAlert.js";
import { displayAlert, deleteAlert } from "../../redux/slices/appSlice.js";

// Definición del componente: <LayoutContainer />
const LayoutContainer = (props) => {
  // 1. Manejo del estado.
  const { children } = props;
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
  return (
    <>
      <Button variant="contained" onClick={() => handlerNotification()}>
        Send REDUX ALERT
      </Button>
      <NotificationsContainer>{children}</NotificationsContainer>
    </>
  );
};

// Exportación.
export default LayoutContainer;
