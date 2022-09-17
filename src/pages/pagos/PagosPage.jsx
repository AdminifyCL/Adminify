// Dependencias.
import React from "react";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

// Estilos.
import "./PagosPage.scss";

// Definición del componente: <ConfirmacionPage />
const PagosPage = ({}) => {
  // -- Manejo del estado.
  const navigate = useNavigate();

  // -- Ciclo de vida.
  // -- Metodos.
  const handleRedirect = () => {
    // Redirigir a la confirmación del pago
    navigate("/confirmacion");
  };

  // -- Renderizado.
  return (
    <section>
      {/* Navegación */}
      <section className="">
        <TabNavigation />
      </section>

      {/* Visual */}
      <section className="">
        <h1>Vista: Pago</h1>
        <Button onClick={() => handleRedirect()}>Confirmar pago</Button>
      </section>
    </section>
  );
};

// Exportación.
export default PagosPage;
