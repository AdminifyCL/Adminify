// Modulos.
import React, {useRef, useId } from 'react'
import { useReactToPrint } from "react-to-print"
import {Button} from "@mui/material";


// Estilos.
import "./ConfirmacionPage.scss"


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

function PagosImpresion(props) {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: ()=> componentRef.current
    })

  return (
    <>
    {/* Lo que va dentro de este div es lo que se imprimira */}
    { <div ref={componentRef} className="PagoImpresion">
        <h1>Productos:</h1>
        {props.productos.map((producto)=>{
            return <p key={producto.nombre}>{producto.nombre}</p>
        })}
    </div> }
    <Button onClick={()=>{
        props.redirigir()
        handlePrint()}} variant="contained"  >
        Imprimir


    </Button>
    </>
  )
}

export default PagosImpresion;