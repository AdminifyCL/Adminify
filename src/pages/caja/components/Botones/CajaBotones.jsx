// Dependencias.
import React from "react";
import { Button } from "@mui/material";

//Estilos
import "./CajaBotones.scss"

// Definición del componente: <CajaBotones />
export function CajaBotones(props) {
  // -- Manejo del estado.
  const { limpia, sendCarrito, canPay, block } = props;

  // -- Ciclo de vida.
  // -- Metodo.
  const handleRedirect = () => {
    // Configurar los productos del carrito.
    sendCarrito();
  };

  // -- Renderizado.
  return (
    <div className="cajaPage_Botones">
      <Button
      disabled={!block}
        variant="outlined"
        style={{ height: "50px", width: "130px" }}
        onClick={() => {
          limpia();
        }}
      >
        Limpiar
      </Button>
      <Button
        disabled={(!canPay||!block)}
        variant="contained"
        style={{ height: "50px", width: "130px" }}
        onClick={() => handleRedirect()}
      >
        Pagar
      </Button>
    </div>
  );
}
