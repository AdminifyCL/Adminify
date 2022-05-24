// Dependencias.
import React from "react";
import { createRoot } from "react-dom/client";

// Importación de componentes.
const App = () => {
  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
};

// Estilos globales.

// Renderizado.
const contenedor = document.getElementById("app");
const root = createRoot(contenedor);
root.render(<App />, contenedor);
