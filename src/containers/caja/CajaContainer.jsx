// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchUserData } from "../../actions/user/fetchUserData.js";

// Hooks.
import { useLocalStorage } from "../../hooks/useLocalStorage.jsx";

// Importación de componentes.
import CajaPage from "../../pages/caja/CajaPage.jsx";

// Definición del contenedor.
const CajaContainer = (props) => {
  // -- Manejo del estado.
  const { allProducts } = props;
  const [inventario, setInventario] = useLocalStorage("inventario", []);
  const [productos, setProductos] = useState([]);

  // -- Ciclo de vida.
  useEffect(() => {
    if (allProducts.length === 0) {
      setProductos(inventario);
    } else {
      setProductos(allProducts);
    }
  }, [allProducts]);

  // -- Metodos.
  // -- Renderizado.
  return <CajaPage productos={productos} />;
};

// PropTypes.
CajaContainer.propTypes = {
  userAuth: PropTypes.object,
  userInfo: PropTypes.object,
};

// Redux
const mapStateToProps = (state) => ({
  userAuth: state.user.userAuth,
  userInfo: state.user.userInfo,
  allProducts: state.product.allProducts ?? [],
});

const mapDispatchToProps = {
  fetchUserData,
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(CajaContainer);

//? mapStateToProps: Consulta el estado de redux y lo mapea a los props del componente.
