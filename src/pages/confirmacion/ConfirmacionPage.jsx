// Dependencias.
import React from "react";
import { Button } from "@mui/material";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";

// Estilos.
import "./ConfirmacionPage.scss";

// Definición del componente: <ConfirmacionPage />
const ConfirmacionPage = ({}) => {
  // -- Manejo del estado.
  // -- Ciclo de vida.
  // -- Metodos.
  const handleImpresion = () => {
    // const ventana = window.open("", "PRINT", "height=720,width=1280");
    // ventana.document.write("Hola, esto es una prueba jeje");
    // ventana.document.close();
    // ventana.focus();
    // ventana.onload = function () {
    //   ventana.print();
    //   ventana.close();
    // };
  };

  // -- Renderizado.
  return (
    <section className="">
      {/* Navegación */}
      <section className="">
        <TabNavigation />
      </section>

      {/* Visual */}
      <section className="ConfirmaciónPage-container">
        <h1>Vista: confirmación del pago</h1>
        <Button onClick={() => handleImpresion()} variant="contained">
          Imprimir
        </Button>
      </section>
    </section>
  );
};

// Exportación.
export default ConfirmacionPage;
