// Dependencias.
import React, { useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { Button } from "@mui/material";
import ProductoCarro from "./Producto/ProductoCarro.jsx";

// Estilos.
import "../CajaPage.scss";

function capitalize(word) {
  if (word.length > 1) {
    return word[0].toUpperCase() + word.slice(1);
  } else if (word.length == 1) {
    return word.toUpperCase();
  } else {
    return word;
  }
}

export function CajaProductos(props) {
  // 1. Manejo del estado.
  const [entrada, setEntrada] = useState("");
  const [showProducts, setShowProducts] = useState([]);
  const { productos, carrito, cambiarTotal, cambiarCarrito, cambiarCantidad } = props;

  // 2. Ciclo de vida.
  useEffect(() => {
    setShowProducts(productos);
  }, [productos]);

  useEffect(() => {
    if (entrada.length > 0) {
      let productosFiltrados = productos.filter((producto) => {
        return producto.nombre.toLowerCase().includes(entrada.toLowerCase());
      });

      setShowProducts(productosFiltrados);
    }
  }, [entrada]);

  // 3. Metodos.
  const mappingProductos = () => {
    return showProducts.map((producto) => {
      return (
        <ProductoCarro
          info={producto}
          key={producto.id}
          carro={carrito}
          cambiaTotal={cambiarTotal}
          cambiaCarro={cambiarCarrito}
          cambiaCantidad={cambiarCantidad}
        />
      );
    });
  };

  // 4. Render.
  return (
    <div className="cajaPage_Productos">
      {/* Buscador. */}
      <nav className="cajaPage_Productos_cabecera">
        <p>Lista de productos</p>
        <input
          type={"search"}
          className="cajaPage_Buscador"
          onChange={(e) => {
            setEntrada(e.target.value);
          }}
        />
      </nav>

      {/* Lista de productos. */}
      <section className="cajaPage_Productos_lista">{mappingProductos()}</section>
    </div>
  );
}
