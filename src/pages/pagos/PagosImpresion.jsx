// Modulos.
import React, {useRef} from 'react'
import { useReactToPrint } from "react-to-print"
import {Button} from "@mui/material";

// Estilos.
import "./PagosPage.scss";

function PagosImpresion(props) {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: ()=> componentRef.current
    })
  return (
    <>
    {/* Lo que va dentro de este div es lo que se imprimira */}
    <div ref={componentRef} className="PagoImpresion">
        Productos:
        {props.productos.map((producto)=>{
            return <p key={producto.nombre}>{producto.nombre}</p>
        })}
    </div>
    <Button onClick={()=>{
        props.redirigir()
        handlePrint()}} variant="contained" disabled={props.activo} >
        Imprimir
    </Button>
    </>
  )
}

export default PagosImpresion