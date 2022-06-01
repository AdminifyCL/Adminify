// Dependencias.
import * as React from "react";

// Importación de componentes.
import EmpleadosPage from "~pages/empleados/EmpleadosPage";

// Definición del contenedor.
const EmpleadosContainer = (props) => {
  return (
    <div>
      <h1>Empleados - container</h1>
      <EmpleadosPage />
    </div>
  );
};

// Exportación del contenedor.
export default EmpleadosContainer;
