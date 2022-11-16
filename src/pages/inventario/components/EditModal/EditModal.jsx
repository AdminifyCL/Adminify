// Dependencias.
import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.

// Definición del componente: EditModal.
const EditModal = (props) => {
  // 1. Manejo del estado.
  const { visible, setVisible, editProduct, producto } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleClose = () => {
    setVisible(false);
  };

  const handleEditProduct = async () => {
    await editProduct(producto);

    // Ocultar modal.
    setVisible(false);
  };

  // 4. Render.
  return (
    <Dialog open={visible} onClose={() => handleClose()}>
      <DialogTitle>title</DialogTitle>
      <DialogContent>content</DialogContent>
      <DialogActions>actions</DialogActions>
    </Dialog>
  );
};

// PropTypes.
EditModal.propTypes = {};

// Exportación.
export default EditModal;
