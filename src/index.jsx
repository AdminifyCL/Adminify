// Dependencias.
import React from "react";
import Theme from "./themes/index.js";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";

// Componentes.
import App from "./components/App/App.jsx";

// Estilos.
import "./styles/global.scss";
import theme from "./themes/index.js";

// Renderizado.
const contenedor = document.getElementById("root");
const root = createRoot(contenedor);

root.render(
  <React.StrictMode>
    {/* Redux */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* Router */}
        <HashRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

