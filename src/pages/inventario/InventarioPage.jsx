// Dependencias.
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ListProducts from "./components/ListProducts/ListProducts.jsx";
import ProductModal from "../../components/Modals/Products/ProductModal.jsx";
import PropTypes from "prop-types";

// Estilos.
import "./InventarioPage.scss";

// Definición del componente: <InventarioPage />
const InventarioPage = (props) => {
  // 1. Manejo del estado.
  const { products, createProduct } = props;
  const [modalVisibility, setModalVisibility] = useState(false);

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
          <ListProducts productos={products} />
        </div>
      </section>
    </section>
  );
};

// PropTypes.
InventarioPage.propTypes = {};

// Exportación.
export default InventarioPage;
