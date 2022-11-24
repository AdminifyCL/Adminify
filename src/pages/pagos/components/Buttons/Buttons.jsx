// Dependencias.
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import {useReactToPrint} from "react-to-print"
import PropTypes from "prop-types";

// Estilos.
import Styles from "./Buttons.styles.jsx";
import "./Buttons.scss";

// Definición del componente: <Buttons />
const Buttons = (props) => {
  // 1. Manejo del estado.
  const { toCaja, toConfirmacion, metodo, cargando, referencia } = props;
  const [active, setActive] = useState(false);

  // 2. Ciclo de vida.
  useEffect(() => {
    if (metodo !== "") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [metodo]);

  // 3. Metodos.
  
  const handlePrint = useReactToPrint({
    content: () => referencia.current,
  });
  
  // 4. Render.
  return (
    <div className="Buttons_container">
      <Button onClick={() => toCaja()} variant="outlined" type="button">
        Cancelar compra
      </Button>

      <Button
        onClick={() => {
          toConfirmacion()
          handlePrint()
        }}
        variant="contained"
        type="submit"
        disabled={!active || cargando}
      >
        {cargando ? "Confirmando venta..." : "Confirmar venta"}
      </Button>

      {/* <PagosImpresion productos={productos} /> */}
    </div>
  );
};

// PropTypes.
Buttons.propTypes = {};

// Exportación.
export default Buttons;
