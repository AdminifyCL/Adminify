import React, {useRef} from 'react'
import { useReactToPrint } from "react-to-print"

function CajaImpresion() {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: ()=> componentRef.current
    })
  return (
    <>
    <div ref={componentRef}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia ducimus repudiandae molestiae corporis consectetur fugit expedita
    </div>
    <button onClick={()=>{handlePrint()}}> Imprimir </button>
    </>
  )
}

export default CajaImpresion