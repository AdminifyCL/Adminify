// Dependencias.
import React, { useState } from "react";
import Licencia from "./Licencia.jsx";

// Models.
import fakeBeneficios from "../../../../models/fakeBeneficios.js";

// Estilos.
import "./Licencias.scss";

// Definición del componente: <LicenciasContainer />
const LicenciasContainer = ({}) => {
  // Renderizado.
  return (
    <div className="LicenciasContainer_container">
      {/* Titulo */}
      <div className="LicenciasContainer_banner">
        <h1>Licencia</h1>
        <p>
          Sección para gestionar la <strong>licencia</strong> de la aplicación.
        </p>
      </div>

      {/* Cartas */}
      <div className="LicenciasContainer_licencias">
        {/* Plan Basico */}
        <Licencia titulo="Básico" actual={true} beneficios={fakeBeneficios[0]} />

        {/* Plan Empresarial */}
        <Licencia titulo="Empresarial" actual={false} beneficios={fakeBeneficios[1]} />

        {/* Plan Experto */}
        <Licencia titulo="Experto" actual={false} beneficios={fakeBeneficios[2]} />
      </div>
    </div>
  );
};

// Exportación.
export default LicenciasContainer;
