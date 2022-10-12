// Dependencias.
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { publicURL, privateURL } from "../../../schemas/Navigation.js";

// Definición del componente: <CajaBotones />
export function CajaBotones(props) {
  // -- Manejo del estado.
  const { limpia, sendCarrito } = props;
  const navigate = useNavigate();

  // -- Ciclo de vida.
  // -- Metodo.
  const handleRedirect = () => {
    // Configurar los productos del carrito.
    sendCarrito();

    // Redirigir al pago.
    navigate(privateURL.pago);
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
        variant="contained"
        style={{ height: "50px", width: "130px" }}
        onClick={() => handleRedirect()}
      >
        Pagar
      </Button>
    </div>
  );
}
