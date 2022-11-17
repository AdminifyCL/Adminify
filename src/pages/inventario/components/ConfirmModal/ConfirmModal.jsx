// Dependencias.
import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import "./ConfirmModal.scss";

// Definición del componente: ConfirmModal.
const ConfirmModal = (props) => {
  // 1. Manejo del estado.
  const { visible, setVisible, deleteProduct, producto, cargando } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleClose = () => {
    setVisible(false);
  };

  const handleEditProduct = async () => {
    await deleteProduct(producto);

    // Ocultar modal.
    setVisible(false);
  };

  // 4. Render.
  return (
    <Dialog open={visible} onClose={() => handleClose()}>
      <DialogTitle>
        <div className="ConfirmModal_titleContainer">
          <h1>¿Estas seguro de querer eliminar el producto?</h1>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="ConfirmModal_contentContainer">
          <p>Una vez confirmada la acción no se podra recuperar el producto.</p>
        </div>
      </DialogContent>
      <DialogActions>
        <div className="ConfirmModal_buttonsContainer">
          <Button variant="outlined" color="primary" onClick={() => handleClose()}>
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleEditProduct()}
            disabled={cargando}
          >
            Confirmar
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};

// PropTypes.
ConfirmModal.propTypes = {};

// Exportación.
export default ConfirmModal;
