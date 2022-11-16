import React from "react";
import "../CajaPage.scss";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

import userSignOut from "../../../api/usuarios/userLogout.js";
import { userLogout } from "../../../redux/slices/usuariosSlice.js";

// Definición del componente: <CajaBotones />
export function CajaCierre(props) {
  // -- Renderizado.
  const { open } = props;
  const visibilidad = open;

  const dispatch = useDispatch();

  const handleSignOut = async () => {
    await userSignOut()
      .then(() => {
        dispatch(userLogout({}));
      })
      .catch((error) => {
        console.error("[] ERROR:", error);
      });
  };

  if (visibilidad&&props.block) {
    return (
      <section className="cajaPage_menu_cierre">
        <p>¿ Desea reaperturar la caja ?</p>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              if (props.block){
                props.bloquearCaja("cajaPage_content")
                props.cerrar()
              }else{
                props.bloquearCaja("cajaPage_content_block")
              props.cerrar();
              }
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
      </section>
    );
  }
  if (visibilidad&&!(props.block)) {
    return (
      <section className="cajaPage_menu_cierre">
        <p>¿ Desea realizar el cierre de caja ?</p>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              if (props.block){
                props.bloquearCaja("cajaPage_content")
                props.cerrar()
              }else{
                props.bloquearCaja("cajaPage_content_block")
              props.cerrar();
              }
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
      </section>
    );
  }
}
