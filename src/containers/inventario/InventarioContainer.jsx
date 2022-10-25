// Dependencias.
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import InventarioPage from "../../pages/inventario/InventarioPage";

// Definición del contenedor: <InventarioContainer />.
const InventarioContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const [productos, setProductos] = useState([]);
  const allProducts = useSelector((state) => state.producto.productos);

  // 2. Ciclo de vida.
  useEffect(() => {
    if (allProducts.length === 0) {
      setProductos(inventario);
    } else {
      setProductos(allProducts);
    }
  }, [allProducts]);

  // 3. Metodos.
  const handleCreateProduct = async (productData) => {
    console.log("[] Product container: ", productData);

    let productosAction = [];
    if (allProducts.length === 0) {
      productosAction = inventario;
    } else {
      productosAction = allProducts;
    }
  };

  // 4. Render.
  return <InventarioPage products={productos} createProduct={handleCreateProduct} />;
};

// PropTypes.
InventarioContainer.propTypes = {};

// Exportación.
export default InventarioContainer;
