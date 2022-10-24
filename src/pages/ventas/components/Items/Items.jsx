// Dependencias.
import React, { useState, useEffect, useId } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import Item from "./Item.jsx";

// Estilos.
import "./Items.scss";

// Definición del componente: <Items />
const Items = (props) => {
  // 1. Manejo del estado.
  const { open, setOpen, productos } = props;

  // 2. Ciclo de vida.
  // 3. Metodos.
  const mappingItems = () => {
    return productos.map((producto) => {
      let id = useId();
      return <Item producto={producto} key={id} />;
    });
  };

  // 4. Render.
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        <h1 className="ventasItem-title">Lista de productos</h1>
      </DialogTitle>
      <DialogContent>{mappingItems()}</DialogContent>
    </Dialog>
  );
};

// Exportación.
export default Items;
