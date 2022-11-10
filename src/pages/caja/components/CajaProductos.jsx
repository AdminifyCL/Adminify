// Dependencias.
import React from "react";
import { FaHamburger } from "react-icons/fa";
import { Button } from "@mui/material";
import { useState } from "react";

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

function formatNumber(number) {
  return new Intl.NumberFormat('de-DE').format(number)
}

export function CajaProductos(props) {
  const [entrada, setEntrada] = useState("");
  return (
    <div className="cajaPage_Productos">
      <nav className="cajaPage_Productos_cabecera">
        <p>Lista de productos</p>
        <input disabled={props.block}
          type={"search"}
          className="cajaPage_Buscador"
          onChange={(e) => {
            setEntrada(e.target.value);
          }}
        ></input>
      </nav>
      <section className="cajaPage_Productos_lista">
        {props.productos.map((producto) => {
          if (producto.nombre.startsWith(capitalize(entrada))) {
            return (
              <div key={producto.id} className="cajaPage_Productos_producto">
                <p>
                  <FaHamburger></FaHamburger>
                </p>
                <p className="cajaPage_producto_texto" style={{ width: "40%" }}>
                  {producto.nombre}
                </p>
                <p className="cajaPage_producto_texto">${formatNumber(producto.valor)}</p>
                <Button
                disabled={props.block}
                  variant="contained"
                  onClick={() => {
                    let vista_producto = props.carrito.map((productoCarro) => {
                      if (productoCarro.id == producto.id) {
                        return true;
                      } else {
                        return false;
                      }
                    });
                    if (!vista_producto.includes(true)) {
                      props.cambiarTotal(producto.valor);
                      props.cambiarCarrito(producto.id, producto.nombre, producto.valor, 1);
                    } else {
                      props.cambiarCantidad(
                        producto.id,
                        producto.cantidad,
                        producto.valor,
                        producto.nombre,
                        true
                      );
                      props.cambiarTotal(producto.valor);
                    }
                  }}
                >
                  Añadir
                </Button>
              </div>
            );
          }
        })}
      </section>
    </div>
  );
}
