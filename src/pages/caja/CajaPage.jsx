// Dependencias.
import React, { Component,useState } from "react";
import PropTypes from "prop-types";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import {CajaProductos} from "./CajaProductos.jsx"
import {CajaCarro} from "./CajaCarro.jsx"
import {CajaCajero} from "./CajaCajero.jsx"
import {CajaTotal} from "./CajaTotal.jsx"
import {CajaBotones} from "./CajaBotones.jsx"
import fakeElements from "../../models/fakeElements.js";
import { Button } from "@mui/material";
import { FaHamburger, FaHotdog } from "react-icons/fa";
import { getDatabase } from "firebase/database";
import { Menu } from "./Menu";
import { Navigate } from "react-router-dom";
import { PublicUrls, PrivateUrls } from "../../models/Navigation.js";

// Importación de estilos.
import "./CajaPage.scss";
import { useEffect } from "react";

const productos = [{index:0 , nombre:"Completo Italiano" , valor:1900, cantidad:1 }]

const CajaPage = (props)=>{

  const [total,setTotal]= useState(0)
  const [carrito,setCarrito]= useState([])

  const cambiarTotal = (valor)=>{
      setTotal(total+valor)
  }

  const cambiarCarro = (index,nombre,precio,cantidad)=>{
    setCarrito([...carrito,{index,nombre,precio,cantidad}]);
  }

  const limpiar = () => {
    setTotal(0);
    setCarrito([]);
  };

  const cambiarCantidad = (cantidad, valor, nombre, suma) => {
    const carro = [...carrito]
    carro.map((item)=>{ 
      if(suma){
        item.cantidad = item.cantidad + 1
        setTotal(total+valor)
      }else{
        if (cantidad > 1){
          item.cantidad = item.cantidad -1
          setTotal(total-valor)
        }
      }})
    console.log(carro)
  };

  return (
    <section className="cajaPage_container">
      {/* Navegación de la aplicación. */}
      <section className="cajaPage_navigation">
        <TabNavigation />
      </section>
      {/* Vista de la caja. */}
      <section className="cajaPage_content">
        <CajaProductos
          total={total}
          productos={productos}
          carro={[...carrito]}
          cambiaCarro={cambiarCarro}
          cambiaTotal={cambiarTotal}
          cambiaCantidad={cambiarCantidad}
        ></CajaProductos>

        <CajaCarro carro={carrito} cambiaCantidad={cambiarCantidad}></CajaCarro>

        <CajaCajero></CajaCajero>

        <CajaTotal total={total}></CajaTotal>

        <CajaBotones limpia={limpiar}></CajaBotones>
        
      </section>
    </section>
  );
}

// Exportación de la pagina: Index.
export default CajaPage;
