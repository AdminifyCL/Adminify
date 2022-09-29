// Dependencias.
import * as React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

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
    {/* Redux, Provider. */}
    <Provider store={store}>
      {/* Redux-persit, PersistGate. */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Router de vistas. */}
        <HashRouter>
          {/* Tema de la aplicación. */}
          <ThemeProvider theme={payAdminTheme}>
            {/* Componente principal. */}
            <App />
          </ThemeProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
