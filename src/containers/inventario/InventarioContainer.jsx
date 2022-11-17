// Dependencias.
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar/Navbar.jsx";
import InventarioPage from "../../pages/inventario/InventarioPage";
import PropTypes from "prop-types";

// Actions.
import APIcreateProduct from "../../api/productos/createProduct.js";
import APIeditProduct from "../../api/productos/editProduct.js";
import APIdeleteProduct from "../../api/productos/deleteProduct.js";

import { displayAlert } from "../../redux/slices/aplicacionSlice.js";
import { createProduct, editProduct, deleteProduct } from "../../redux/slices/productosSlice.js";

// Definición del contenedor: <InventarioContainer />.
const InventarioContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const dispatch = useDispatch();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const allProducts = useSelector((state) => state.producto.productos);
  const userData = useSelector((state) => state.user.userData);

  // 2. Ciclo de vida.
  useEffect(() => {
    console.log("[UPDATE] All Products: ");
    setProductos(allProducts);
  }, [allProducts]);

  // 3. Metodos.
  const handleCreateProduct = async (productData) => {
    console.log("[CONTAINER] CREATE NEW PRODUCT");
    console.log("[CONTAINER] Product: ", productData);
    setCargando(true);

    // Comunicación con la API.
    let tiendaId = userData.tiendaId;
    await APIcreateProduct(productData, tiendaId)
      .then((response) => {})
      .catch((error) => {});

    // Crear el producto en Redux.
    dispatch(createProduct(productData));
    setCargando(false);
  };

  const handleEditProduct = async (productData) => {
    console.log("[CONTAINER] EDIT PRODUCT");
    console.log("[CONTAINER] Product: ", productData);
    setCargando(true);

    // Comunicación con la API.
    let tiendaId = userData.tiendaId;
    await APIeditProduct(productData, tiendaId)
      .then((response) => {})
      .catch((error) => {});

    // Editar el producto en Redux.
    dispatch(editProduct(productData));
    setCargando(false);
  };

  const handleDeleteProduct = async (productData) => {
    console.log("[CONTAINER] DELETE PRODUCT");
    console.log("[CONTAINER] Product: ", productData);
    setCargando(true);

    // Comunicación con la API de la base de datos.
    let tiendaId = userData.tiendaId;
    await APIdeleteProduct(productData, tiendaId)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });

    // Eliminar el producto en Redux.
    dispatch(deleteProduct(productData));
    setCargando(false);
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
