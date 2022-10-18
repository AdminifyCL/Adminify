// Dependencias.
import React, { useState, useEffect } from "react";
import { Button, Modal } from "@mui/material";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import ListProducts from "./components/ListProducts/ListProducts.jsx";
import ProductModal from "../../components/Modals/Products/ProductModal.jsx";

// Importación de estilos.
import "./InventarioPage.scss";

// Definición de la pagina: <InventarioPage />
const InventarioPage = (props) => {
  // -- Manejo del estado.
  const { products, createProduct } = props;
  const [modalVisibility, setModalVisibility] = useState(false);

  // -- Ciclo de vida.
  useEffect(() => {}, []);

  // -- Metodos.
  const handleCreateProduct = () => {
    setModalVisibility(true);
  };

  const handleVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  // -- Renderizado.
  return (
    <section className="inventarioPage_container">
      {/* Navegación de la aplicación. */}
      <section className="inventarioPage_navigation">
        <TabNavigation />
      </section>

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

// Exportación de la pagina: Index.
export default InventarioPage;
