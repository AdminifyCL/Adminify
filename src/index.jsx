// Dependencias.
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Componentes.
import App from "./components/App/App.jsx";

// Estilos.

// Renderizado.
const contenedor = document.getElementById("root");
const root = createRoot(contenedor);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

