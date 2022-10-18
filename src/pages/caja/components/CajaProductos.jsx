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

export function CajaProductos(props) {
  const [entrada, setEntrada] = useState("");
  return (
    <div className="cajaPage_Productos">
      <nav className="cajaPage_Productos_cabecera">
        <p>Lista de productos</p>
        <input
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
              <div key={producto.nombre} className="cajaPage_Productos_producto">
                <p>
                  <FaHamburger></FaHamburger>
                </p>
                <p className="cajaPage_producto_texto" style={{ width: "40%" }}>
                  {producto.nombre}
                </p>
                <p className="cajaPage_producto_texto">${producto.valor}</p>
                <Button
                  variant="contained"
                  onClick={() => {
                    let vista_producto = props.carro.map((pcar) => {
                      if (pcar.nombre == producto.nombre) {
                        return true;
                      } else {
                        return false;
                      }
                    });
                    if (!vista_producto.includes(true)) {
                      props.cambiaTotal(producto.valor);
                      props.cambiaCarro(props.carro.length, producto.nombre, producto.valor, 1);
                    } else {
                      props.cambiaCantidad(
                        producto.cantidad,
                        producto.valor,
                        producto.nombre,
                        true
                      );
                      props.cambiaTotal(producto.valor);
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
