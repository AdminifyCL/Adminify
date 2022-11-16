// Dependencias.
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar.jsx";
import InventarioPage from "../../pages/inventario/InventarioPage";
import PropTypes from "prop-types";

// Actions.
import { createProduct, editProduct, deleteProduct } from "../../redux/slices/productosSlice.js";

// Definición del contenedor: <InventarioContainer />.
const InventarioContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const dispatch = useDispatch();
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
    console.log("[CONTAINER] CREATE NEW PRODUCT");
    console.log("[CONTAINER] Product: ", productData);

    dispatch(createProduct(productData));
  };

  const handleEditProduct = async (productData) => {
    console.log("[CONTAINER] EDIT PRODUCT");
    console.log("[CONTAINER] Product: ", productData);

    dispatch(editProduct(productData));
  };

  const handleDeleteProduct = async (productData) => {
    console.log("[CONTAINER] DELETE PRODUCT");
    console.log("[CONTAINER] Product: ", productData);

    dispatch(deleteProduct(productData));
  };

  // 4. Render.
  return (
    <Navbar>
      <InventarioPage
        products={productos}
        createProduct={handleCreateProduct}
        editProduct={handleEditProduct}
        deleteProduct={handleDeleteProduct}
      />
    </Navbar>
  );
};

// PropTypes.
InventarioContainer.propTypes = {};

// Exportación.
export default InventarioContainer;
