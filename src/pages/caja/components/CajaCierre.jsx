import React from "react";
import "../CajaPage.scss";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

import userSignOut from "../../../api/usuarios/userLogout.js";
import { userLogout } from "../../../redux/slices/usuariosSlice.js";

// Definición del componente: <CajaBotones />
export function CajaCierre(props) {
  // -- Renderizado.

  const visibilidad = props.open;

  const dispatch = useDispatch()

  const handleSignOut = async () => {
    await userSignOut()
      .then(() => {
        dispatch(userLogout({}));
      })
      .catch((error) => {
        console.error("[] ERROR:", error);
      });
  };

  if (visibilidad) {
    return (
      <div className="cajaPage_menu_cierre">
        ¿ Esta seguro de realizar el cierre de caja ?
        <div>
        <Button
            variant="contained"
            onClick={() => {
              //CODIGO DE CIERRE DE CAJA
              handleSignOut()
            }}
          >
            Aceptar
          </Button>
        <Button
            variant="outlined"
            onClick={() => {
              props.cerrar();
            }}
          >
            Salir
          </Button>
          
        </div>
      </div>
    );
  }
}
