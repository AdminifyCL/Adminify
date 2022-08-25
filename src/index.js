// Dependencias.
import * as React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import payAdminStore from "~redux/store.js";

// Importación de componentes.
import App from "./components/App/App.jsx";

// Importación de estilos.
import "./styles/global.scss";
import payAdminTheme from "./themes/payAdminTheme.js";

// Renderizado.
const contenedor = document.getElementById("app");
const root = createRoot(contenedor);

root.render(
  <React.StrictMode>
    {/* REDUX - provider */}
    <Provider store={payAdminStore}>
      {/* React ROUTER - HASH */}
      <HashRouter>
        {/* My little app uwu */}
        <ThemeProvider theme={payAdminTheme}>
          <App />
        </ThemeProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
