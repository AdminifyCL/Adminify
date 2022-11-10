import React from "react";

export function CajaTotal(props){

    return(
        <div className="cajaPage_Total"><p>Total </p><p className="cajaPage_Total_valor">${props.total}</p></div>
    )
    
}