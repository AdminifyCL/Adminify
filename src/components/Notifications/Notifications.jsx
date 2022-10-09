// Dependencias.
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Snackbar, Alert, AlertTitle } from "@mui/material";
import { displayAlert, deleteAlert } from "../../redux/slices/appSlice.js";

// Definición del componente: <LayoutContainer />
const NotificationsContainer = (props) => {
  // 1. Manejo del estado.
  const { children } = props;
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);

  const [open, setOpen] = useState(false);

  // 2. Ciclo de vida.
  useEffect(() => {
    console.log("[] APP: ", app);
    const { alertVisible } = app;

    if (alertVisible) {
      setOpen(true);
    }
  }, [app]);

  // 3. Metodos.
  const handleTestingAlert = () => {
    console.log("Hey mom, I'm testing the alert!");
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(deleteAlert());
  };

  const mappingAlert = () => {
    const { type } = app;
    console.log("[] APP;", app);

    return (
      <Alert severity={type}>
        <AlertTitle>{app.title}!</AlertTitle>
        {app.message}!
      </Alert>
    );
  };

  // 4. Renderizado.
  return (
    <>
      <div>
        <Button variant="contained" onClick={() => handleTestingAlert()}>
          Hola
        </Button>
      </div>
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
