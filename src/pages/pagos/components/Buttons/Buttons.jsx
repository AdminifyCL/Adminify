// Dependencias.
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import PagosImpresion from "../PagosImpresion/PagosImpresion.jsx";
import PropTypes from "prop-types";

// Estilos.
import Styles from "./Buttons.styles.jsx";
import "./Buttons.scss";

// Definición del componente: <Buttons />
const Buttons = (props) => {
  // 1. Manejo del estado.
  const { toCaja, toConfirmacion, productos, metodo } = props;
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
  // 4. Render.
  return (
    <div className="Buttons_container">
      <Button onClick={() => toCaja()} variant="outlined" type="button">
        Cancelar compra
      </Button>

      <Button onClick={() => toConfirmacion()} variant="contained" type="submit" disabled={!active}>
        Confirmar pago
      </Button>

      {/* <PagosImpresion productos={productos} /> */}
    </div>
  );
};

// PropTypes.
Buttons.propTypes = {};

// Exportación.
export default Buttons;
