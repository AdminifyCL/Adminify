// Dependencias.
import React from "react";
import { connect } from "react-redux";

// Importación de componentes.
import DevNavigation from "~components/DevNavigation/DevNavigation.jsx";
import Router from "~routes/Router";

// Definición del componente: <App />.
const App = (props) => {
  // Estado.
  const { appInfo } = props;
  const { appMode } = appInfo;

  // Metodos.
  function handleAppMode() {
    if (appMode === "DEV") {
      return <DevNavigation info={appInfo} />;
    } else {
      return null;
    }
  }

  // Retorno visual.
  return (
    <>
      {/* Navigation */}
      {handleAppMode()}

      {/* Router de la aplicación */}
      <Router />
    </>
  );
};

// Consulta al store.
const mapStateToProps = (state) => {
  return {
    appInfo: state.appInfo,
  };
};

// Exportación del componente: <App />.
export default connect(mapStateToProps)(App);
