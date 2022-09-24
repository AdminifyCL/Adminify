import React from "react";
import { FaHamburger, FaHotdog } from "react-icons/fa";
import { Button } from "@mui/material";

export function CajaBotones(props){

    return(
        <div className="cajaPage_Botones">
            <Button
                variant="outlined"
                style={{ height: "50px", width: "130px" }}
                onClick={() => {
                    props.limpia()
                }}
              >
                Limpiar
              </Button>
              <Button
                variant="contained"
                style={{ height: "50px", width: "130px" }}
                onClick={() => {
                  console.log("Pagando...")
                }}
              >
                Pagar
              </Button>          
            </div>
    )
    
}