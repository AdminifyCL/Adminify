//Dependencias
import React from "react";

//Metodos
function formatNumber(number) {
    return new Intl.NumberFormat('de-DE').format(number)
  }

//Definicion del componente <CajaTotal>
export function CajaTotal(props){

    return(
        <div className="cajaPage_Total"><p>Total </p><p className="cajaPage_Total_valor">${formatNumber(props.total)}</p></div>
    )
    
}