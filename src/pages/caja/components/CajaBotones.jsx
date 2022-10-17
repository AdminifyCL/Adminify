// Dependencias.
import React from "react";
import { Button } from "@mui/material";

// Definición del componente: <CajaBotones />
export function CajaBotones(props) {
  // -- Manejo del estado.
  const { limpia, sendCarrito, canPay } = props;

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
        variant="outlined"
        style={{ height: "50px", width: "130px" }}
        onClick={() => {
          limpia();
        }}
      >
        Limpiar
      </Button>
      <Button
        disabled={!canPay}
        variant="contained"
        style={{ height: "50px", width: "130px" }}
        onClick={() => handleRedirect()}
      >
        Pagar
      </Button>
    </div>
  );
}
