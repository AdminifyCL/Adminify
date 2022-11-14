//Dependencias
import React from "react";
import "../CajaPage.scss";
import { BsFillTrashFill, BsPlusCircleFill } from "react-icons/bs";

function formatNumber(number) {
  return new Intl.NumberFormat("de-DE").format(number);
}

//Definicion de componente <CajaCarro/>
export function CajaCarro(props) {
  return (
    <div className="cajaPage_Carro">
      <div className="cajaPage_Carro_cabecera">
        <p> Carrito </p>
      </div>
      {props.carrito.map((producto) => {
        if (producto.cantidad >= 0) {
          return (
            <div key={producto.id} className="cajaPage_Carro_producto">
              <p className="cajaPage_producto_texto" style={{ width: "40%" }}>
                {producto.nombre}
              </p>
              <div className="cajaPage_carro_cantidad">
                <button
                  className="cajaPage_carro_boton"
                  onClick={() => {
                    if (producto.cantidad > 0) {
                      props.cambiarCantidad(
                        producto.id,
                        producto.cantidad,
                        producto.precio,
                        producto.nombre,
                        false
                      );
                    }
                    if (producto.cantidad == 0) {
                      props.borrarDelCarrito();
                    }
                  }}
                >
                  <BsFillTrashFill size={20} color="#1b5943"></BsFillTrashFill>
                </button>

                <p style={{ margin: "1px 5px 1px 5px", width: "20%" }}>
                  {/* {producto.cantidad >= 1 ? producto.cantidad : 1} */}
                  {producto.cantidad}
                </p>
                <button
                  className="cajaPage_carro_boton"
                  onClick={() => {
                    props.cambiarCantidad(
                      producto.id,
                      producto.cantidad,
                      producto.precio,
                      producto.nombre,
                      true
                    );
                  }}
                >
                  <BsPlusCircleFill size={20} color="#1b5943"></BsPlusCircleFill>
                </button>
              </div>
              <p className="cajaPage_producto_texto">
                $
                {formatNumber(
                  producto.cantidad >= 1 ? producto.cantidad * producto.precio : producto.precio
                )}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
