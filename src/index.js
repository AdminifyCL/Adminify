// Dependencias.
import * as React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

// Importación del store.

// Importación de componentes.
import App from "~components/App/App.jsx";

// Importación de estilos.
import "~styles/global.scss";

// Renderizado.
const contenedor = document.getElementById("app");
const root = createRoot(contenedor);

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
