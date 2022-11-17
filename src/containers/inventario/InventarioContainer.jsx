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
    setProductos(allProducts);
  }, [allProducts]);

  // 3. Metodos.
  const handleCreateProduct = async (productData) => {
    setCargando(true);

    // Comunicación con la API.
    let tiendaId = userData.tiendaId;
    const response = await APIcreateProduct(productData, tiendaId)
      .then((response) => {
        let new_alert = {
          title: "Producto",
          message: "Producto creado correctamente",
          type: "success",
        };

        dispatch(displayAlert(new_alert));

        return response;
      })
      .catch((error) => {
        let new_alert = {
          title: "Producto",
          message: "Error al editar el producto",
          type: "error",
        };

        dispatch(displayAlert(new_alert));
      });

    // Crear el producto en Redux.
    let new_data = {
      ...productData,
      id: response.id,
    };
    dispatch(createProduct(new_data));
    setCargando(false);
  };

  const handleEditProduct = async (productData) => {
    setCargando(true);

    // Comunicación con la API.
    let tiendaId = userData.tiendaId;
    await APIeditProduct(productData, tiendaId)
      .then((response) => {
        let new_alert = {
          title: "Producto",
          message: "Producto editado correctamente",
          type: "success",
        };

        dispatch(displayAlert(new_alert));
      })
      .catch((error) => {
        let new_alert = {
          title: "Producto",
          message: "Error al editar el producto",
          type: "error",
        };

        dispatch(displayAlert(new_alert));
      });

    // Editar el producto en Redux.
    dispatch(editProduct(productData));
    setCargando(false);
  };

  const handleDeleteProduct = async (productData) => {
    setCargando(true);

    // Comunicación con la API de la base de datos.
    let tiendaId = userData.tiendaId;
    await APIdeleteProduct(productData, tiendaId)
      .then((response) => {
        let new_alert = {
          title: "Producto",
          message: "Producto eliminado correctamente",
          type: "success",
        };

        dispatch(displayAlert(new_alert));
      })
      .catch((error) => {
        let new_alert = {
          title: "Producto",
          message: "Error al eliminar el producto",
          type: "error",
        };

        dispatch(displayAlert(new_alert));
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
        cargando={cargando}
      />
    </Navbar>
  );
};

// PropTypes.
InventarioContainer.propTypes = {};

// Exportación.
export default InventarioContainer;
