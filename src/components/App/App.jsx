// Dependencias.
import React from "react";

// Importación de componentes.
import DevNavigation from "~components/DevNavigation/DevNavigation.jsx";
import Router from "~routes/Router";

// Definición del componente: <App />.
const App = () => {
  return (
    <>
      {/* Navigation */}
      <DevNavigation />

      {/* Router de la aplicación */}
      <Router />
    </>
  );
};

// Exportación del componente: <App />.
export default App;
