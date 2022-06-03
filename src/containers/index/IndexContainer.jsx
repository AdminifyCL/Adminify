// Dependencias.
import * as React from "react";
import { connect } from "react-redux";

// Importación de componentes.
import IndexPage from "~pages/index/IndexPage.jsx";

// Definición del contenedor.
const IndexContainer = (props) => {
  // Estado y props.
  const { appInfo } = props;

  // Retorno del componente visual.
  return (
    <>
      <IndexPage info={appInfo} />
    </>
  );
};

// Redux
const mapStateToProps = (state) => {
  //? Desde aquí se llaman a los parametros que necesitemos desde el store.
  return {
    appInfo: state.app || {},
  };
};

// Exportación del contenedor.
export default connect(mapStateToProps, null)(IndexContainer);

//? mapStateToProps: Consulta el estado de redux y lo mapea a los props del componente.
