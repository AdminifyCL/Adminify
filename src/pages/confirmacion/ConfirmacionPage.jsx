// Dependencias.
import React from "react";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";

// Estilos.
import "./ConfirmacionPage.scss";

// Definición del componente: <ConfirmacionPage />
const ConfirmacionPage = ({}) => {
  // -- Manejo del estado.
  // -- Ciclo de vida.
  // -- Metodos.
  // -- Renderizado.
  return (
    <section>
      {/* Navegación */}
      <section className="">
        <TabNavigation />
      </section>

      {/* Visual */}
      <section className="">
        <h1>Vista: confirmación del pago</h1>
      </section>
    </section>
  );
};

// Exportación.
export default ConfirmacionPage;
