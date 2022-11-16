// Dependencias.
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ListProducts from "./components/ListProducts/ListProducts.jsx";
import ProductModal from "../../components/Modals/Products/ProductModal.jsx";
import EditModal from "./components/EditModal/EditModal.jsx";
import ConfirmModal from "./components/ConfirmModal/ConfirmModal.jsx";
import PropTypes from "prop-types";

// Estilos.
import "./InventarioPage.scss";

// Definición del componente: <InventarioPage />
const InventarioPage = (props) => {
  // 1. Manejo del estado.
  const { products, createProduct, editProduct, deleteProduct } = props;
  const [modalVisibility, setModalVisibility] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [producto, setProducto] = useState(null);

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleCreateProduct = () => {
    setModalVisibility(true);
  };

  const handleVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  // 4. Render.
  return (
    <section className="inventarioPage_container">
      {/* Modal */}
      <ProductModal
        open={modalVisibility}
        onClose={() => handleVisibility()}
        createProduct={createProduct}
      />

      {/* Edit product */}
      <EditModal
        visible={editModal}
        setVisible={setEditModal}
        editProduct={editProduct}
        producto={producto}
      />

      {/* Delete product */}
      <ConfirmModal
        visible={deleteModal}
        setVisible={setDeleteModal}
        deleteProduct={deleteProduct}
        producto={producto}
      />

      {/* Vista de la caja. */}
      <section className="inventarioPage_content">
        {/* Titulo y boton de acción */}
        <div className="inventarioPage_content_header">
          <h1>Administración de inventario</h1>

          <Button variant="contained" onClick={() => handleCreateProduct()}>
            Agregar producto
          </Button>
        </div>

        {/* Contenedor de elementos. */}
        <div className="inventarioPage_content_container">
          {/* Tabla de elementos. */}
          <ListProducts
            productos={products}
            editModal={setEditModal}
            deleteModal={setDeleteModal}
            setProducto={setProducto}
          />
        </div>
      </section>
    </section>
  );
};

// PropTypes.
InventarioPage.propTypes = {};

// Exportación.
export default InventarioPage;
