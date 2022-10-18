import React from "react";
import "../CajaPage.scss";
import {BsFillTrashFill,BsPlusCircleFill } from "react-icons/bs";
import { useEffect } from "react";
import { borderRadius } from "@mui/system";



export function CajaCarro(props) {
  return (
    <div className="cajaPage_Carro">
      <div className="cajaPage_Carro_cabecera">
        <p> Carrito </p>
      </div>
      {props.carro.map((producto) => {
        if (producto.cantidad>=0){
          return (
            <div key={producto.nombre} className="cajaPage_Carro_producto">
              <p className="cajaPage_producto_texto" style={{ width: "40%" }}>
                {producto.nombre}
              </p>
              <div className="cajaPage_carro_cantidad">
                <button
                  className="cajaPage_carro_boton"
                  onClick={() => {
                    if (producto.cantidad > 0){
                      props.cambiaCantidad(producto.cantidad, producto.precio, producto.nombre, false);
                    }
                    if (producto.cantidad == 0){
                      props.borrar()
                    }
                  }}
                >
                  <BsFillTrashFill></BsFillTrashFill>
                </button>
  
                <p style={{ margin: "1px 5px 1px 5px", width: "20%" }}>
                  {/* {producto.cantidad >= 1 ? producto.cantidad : 1} */}
                  {producto.cantidad}
                </p>
                <button
                  className="cajaPage_carro_boton"
                  onClick={() => {
                    props.cambiaCantidad(producto.cantidad, producto.precio, producto.nombre, true);
                  }}
                >
                  <BsPlusCircleFill></BsPlusCircleFill>
                </button>
              </div>
              <p className="cajaPage_producto_texto">
                ${producto.cantidad >= 1 ? producto.cantidad * producto.precio : producto.precio}
              </p>
            </div>
          )
        }
        
      })}
    </div>
  );
}
