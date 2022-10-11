// Dependencias.
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Snackbar, Alert, AlertTitle } from "@mui/material";
import { displayAlert, deleteAlert } from "../../redux/slices/aplicacionSlice.js";

// Definición del componente: <LayoutContainer />
const NotificationsContainer = (props) => {
  // 1. Manejo del estado.
  const { children } = props;
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const [open, setOpen] = useState(false);

  // 2. Ciclo de vida.
  useEffect(() => {
    const { alertVisible } = app;

    if (alertVisible) {
      setOpen(true);
    }
  }, [app]);

  // 3. Metodos.
  const handleClose = () => {
    setOpen(false);
    dispatch(deleteAlert());
  };

  const mappingAlert = () => {
    const { type, title, message } = app.alertData;

    // Renderizado de la alerta.
    if (title !== "" && message !== "") {
      return (
        <Alert severity={type ? type : "success"} variant="filled">
          <AlertTitle>{title}!</AlertTitle>
          {message}!
        </Alert>
      );
    } else {
      return null;
    }
  };

  // 4. Renderizado.
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={() => handleClose()}
        autoHideDuration={3000}
      >
        {mappingAlert()}
      </Snackbar>

      {children}
    </>
  );
};

// Exportación.
export default NotificationsContainer;
