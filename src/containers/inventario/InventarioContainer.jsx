// Dependencias.
import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Actions.
import { createProduct } from "../../actions/productos/createProduct.js";
import { fetchProducts } from "../../actions/productos/fetchProducts.js";
import { fetchUserData } from "../../actions/user/fetchUserData.js";

// Importación de componentes.
import InventarioPage from "../../pages/inventario/InventarioPage.jsx";

// Definición del contenedor: <InventarioContainer />
const InventarioContainer = ({ userInfo, userAuth, fetchUserData, fetchProducts, allProducts }) => {
  // -- Manejo del estado.
  const [productos, setProductos] = useState([]);

  // -- Ciclo de vida.
  useEffect(() => {
    console.log("[container] Mount");
    if (userAuth?.uid) {
      let userId = userAuth.uid;
      fetchUserData(userId);
    }
  }, []);

  // -- Metodos.
  const conseguirProductos = async (id) => {
    console.log("[] Conseguir productos");
    await fetchProducts(id);
  };

  const createProducto = () => {};

  // -- Renderizado.
  return (
    <InventarioPage userInfo={userInfo} getProducts={conseguirProductos} products={allProducts} />
  );
};

// PropTypes.
InventarioContainer.propTypes = {};

// Redux
const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo ?? {},
  userAuth: state.user.userAuth ?? {},
  allProducts: state.product.allProducts ?? [],
});

const mapDispatchToProps = {
  createProduct,
  fetchProducts,
  fetchUserData,
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(InventarioContainer);
