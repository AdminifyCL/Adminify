//Dependencias
import React from "react";
import { Button } from "@mui/material";

//Estilos
import "./CajaCierre.scss";

// Definición del componente: <CajaBotones />
export function CajaCierre(props) {
  // -- Renderizado.
  const { open } = props;
  if (open && !props.block) {
    return (
      <section className="cajaPage_menu_cierre">
        <p>¿ Desea realizar la apertura de caja ?</p>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              if (!props.block) {
                props.bloquearCaja("cajaPage_content");
                props.abrirCaja()
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
  if (open && props.block) {
    return (
      <section className="cajaPage_menu_cierre">
        <p>¿ Desea realizar el cierre de caja ?</p>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              if (props.block) {
                props.bloquearCaja("cajaPage_content_block");
                props.cerrarCaja()
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
