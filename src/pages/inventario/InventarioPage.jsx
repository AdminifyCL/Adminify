// Dependencias.
import React, { useState, useEffect } from "react";
import { Button, Modal } from "@mui/material";
import PropTypes from "prop-types";
import fakeElements from "../../models/fakeElements.js";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import TableContainer from "../../components/Table/Table.jsx";
import ProductModal from "../../components/Modals/Products/ProductModal.jsx";

// Importación de estilos.
import "./InventarioPage.scss";

// Definición de la pagina: <InventarioPage />
const InventarioPage = ({}) => {
  // -- Manejo del estado.
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {}, []);

  // -- Ciclo de vida.
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
      <ProductModal open={modalVisibility} onClose={() => handleVisibility()} />

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
          <TableContainer data={fakeElements} />
        </div>
      </section>
    </section>
  );
};

// PropTypes.
InventarioPage.propTypes = {};

// Exportación de la pagina: Index.
export default InventarioPage;
