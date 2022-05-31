// Dependencias.
import React from "react";
import { createRoot } from "react-dom/client";

// Importación de componentes.
const App = () => {
  return <h1>Hola mundo</h1>;
};

// Importación de estilos.
import "~styles/global.scss";

// Renderizado.
const contenedor = document.getElementById("app");
const root = createRoot(contenedor);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
