// Depencias.
import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@mui/material";

// Estilos.
import "./PagosImpresion.scss";

// Definición del componente: <PagosImpresion />
const PagosImpresion = (props) => {
  // 1. Manejo del estado.
  const { productos, redirigir, activo } = props;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <>
      {/* Lo que va dentro de este div es lo que se imprimira */}
      <div ref={componentRef} className="PagoImpresion">
        <h1>Productos:</h1>
        {productos.map((producto) => {
          return <p key={producto.nombre}>{producto.nombre}</p>;
        })}
      </div>
      <Button
        onClick={() => {
          redirigir();
          handlePrint();
        }}
        variant="contained"
        disabled={activo}
      >
        Imprimir
      </Button>
    </>
  );
};

// PropTypes.
PagosImpresion.propTypes = {};

// Exportación.
export default PagosImpresion;
