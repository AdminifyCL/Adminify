import React from "react";
import "./CajaPage.scss";

export function CajaCarro(props){
  return (
    <div className="cajaPage_Carro">
      <div className="cajaPage_Carro_cabecera">
        <p> Carrito </p>
      </div>
      {props.carro.map((producto)=>{
        return (
          <div className="cajaPage_Carro_producto">
            <p className="cajaPage_producto_texto" style={{ width: "40%" }}>
              {producto.nombre}
            </p>
            <div className="cajaPage_carro_cantidad">
              <p style={{ margin: "1px 5px 1px 5px", width: "20%" }}>
                {producto.cantidad >= 1 ? producto.cantidad : 1}
              </p>
            </div>
            <p className="cajaPage_producto_texto">
              ${producto.cantidad >= 1 ? producto.cantidad * producto.precio : producto.precio}
            </p>
          </div>
        );
        })}
    </div>
  );
}