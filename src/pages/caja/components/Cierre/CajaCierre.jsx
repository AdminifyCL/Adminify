//Dependencias
import React from "react";
import { Button } from "@mui/material";

//Estilos
import "./CajaCierre.scss";

// Definición del componente: <CajaBotones />
export function CajaCierre(props) {

  const { block , open , cerrarModal, bloquearCaja, handleConfirmacion} = props

  if (open && !block) {
    return (
      <section className="cajaPage_menu_cierre">
        <p>¿ Desea realizar la apertura de caja ?</p>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              if (!block) {
                bloquearCaja();
                cerrarModal();
              }
            }}
          >
            Aceptar
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              cerrarModal();
            }}
          >
            Salir
          </Button>
        </div>
      </section>
    );
  }
  if (open && block) {
    return (
      <section className="cajaPage_menu_cierre">
        <p>¿ Desea realizar el cierre de caja ?</p>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              if (block) {
                bloquearCaja();
                cerrarModal();
                handleConfirmacion()
              }
            }}
          >
            Aceptar
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              cerrarModal();
            }}
          >
            Salir
          </Button>
        </div>
      </section>
    );
  }
}
