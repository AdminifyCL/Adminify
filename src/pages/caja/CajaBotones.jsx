import React from "react";
import { FaHamburger, FaHotdog } from "react-icons/fa";
import { Button, Fab } from "@mui/material";
import { TbBuildingStore } from "react-icons/tb";

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
                  props.toPagar()
                }}
              >
                Pagar
              </Button>
              <Fab color="primary" aria-label="add">
        <TbBuildingStore/>
      </Fab>        
            </div>
    )
    
}