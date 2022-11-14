// Dependencias.
import React, { useState, useEffect, useId } from "react";

// Estilos.
import "./Item.scss";

// Definición del componente: <Item />
const Item = (props) => {
  // 1. Manejo del estado.
  const { producto } = props;
  const id = useId();

  // 2. Ciclo de vida.
  // 3. Metodos.
  // 4. Render.
  return (
    <div className="ventasItem-container" key={id}>
      <p className="ventasItem-contentNombre">{producto.nombre}</p>
      <p className="ventasItem-contentCantidad">{producto.cantidad}</p>
      <p className="ventasItem-contentPrecio">${producto.precio}</p>
    </div>
  );
};

// Exportación.
export default Item;
