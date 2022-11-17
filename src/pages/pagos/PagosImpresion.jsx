// Modulos.
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@mui/material";

// Estilos.
import "./PagosPage.scss";

function PagosImpresion(props) {
  const componentRef = props.referencia;
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Button
        onClick={() => {
          props.redirigir();
          handlePrint();
        }}
        variant="contained"
        disabled={props.activo}
      >
        Realizar pago
      </Button>
    </>
  );
}

export default PagosImpresion;
