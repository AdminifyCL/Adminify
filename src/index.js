// Dependencias.
import React from "react";
import { createRoot } from "react-dom/client";

// Importación de componentes.
import App from "!components/App/App.jsx";

// Estilos globales.
import "!styles/global.scss";

// Renderizado.
const contenedor = document.getElementById("app");
const root = createRoot(contenedor);
root.render(<App />);
