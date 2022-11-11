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
      {/* Lo que va dentro de este div es lo que se imprimira */}
      {/* <div ref={componentRef} className="pagosPage_boleta">
        Pedido:
        {props.productos.map((producto) => {
          return (
            <p key={producto.nombre}>
              {producto.cantidad} {producto.nombre}
            </p>
          );
        })}
      </div> */}
      <Button
        onClick={() => {
          props.redirigir();
          handlePrint();
        }}
        variant="contained"
        disabled={props.activo}
      >
        Imprimir
      </Button>
    </>
  );
}

export default PagosImpresion;
