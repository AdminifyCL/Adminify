// Dependencias.
import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Hooks.
import { useLocalStorage } from "../../hooks/useLocalStorage.jsx";

// Actions.
import { createProduct } from "../../actions/productos/createProduct.js";
import { fetchProducts } from "../../actions/productos/fetchProducts.js";
import { fetchUserData } from "../../actions/user/fetchUserData.js";

// Importación de componentes.
import InventarioPage from "../../pages/inventario/InventarioPage.jsx";

// Definición del contenedor: <InventarioContainer />
const InventarioContainer = (props) => {
  // -- Manejo del estado.
  const { allProducts, createProduct } = props;
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
  const handleCreateProduct = async (productData) => {
    console.log("[] Product container: ", productData);

    let productosAction = [];
    if (allProducts.length === 0) {
      productosAction = inventario;
    } else {
      productosAction = allProducts;
    }

    await createProduct(productData, productosAction)
      .then(() => {
        console.log("[✅] Se creo un producto!");
      })
      .catch((error) => {
        console.log("[😞] No Se pudo crear un producto");
      });
  };

  // -- Renderizado.
  return <InventarioPage products={productos} createProduct={handleCreateProduct} />;
};

// PropTypes.
InventarioContainer.propTypes = {};

// Redux
const mapStateToProps = (state) => ({
  allProducts: state.product.allProducts ?? [],
});

const mapDispatchToProps = {
  createProduct,
  fetchProducts,
  fetchUserData,
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(InventarioContainer);
