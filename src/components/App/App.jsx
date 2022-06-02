// Dependencias.
import React from "react";
import { connect } from "react-redux";

// Importación de componentes.
import DevNavigation from "~components/DevNavigation/DevNavigation.jsx";
import Router from "~routes/Router";

// Definición del componente: <App />.
const App = (props) => {
  // Estado y props.
  const { appMode } = props;

  // Metodos.
  function handleAppMode() {
    if (appMode === "DEV") {
      return <DevNavigation />;
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

// PropTypes.

// Consulta al store.
const mapStateToProps = (state) => {
  return {
    appMode: state.app.appMode || "DEV",
  };
};

// Exportación del componente: <App />.
export default connect(mapStateToProps, null)(App);
