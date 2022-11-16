// Dependencias.
import React, { useState, useEffect } from "react";
import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import Styles from "./MetodoPago.styles.jsx";
import "./MetodoPago.scss";

// Definición del componente: <MetodoPago />
const MetodoPago = (props) => {
  // 1. Manejo del estado.
  const { metodo, setMetodo } = props;

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleSubmit = (event) => {};

  const handleMetodo = (event) => {
    let value = event.target.value;

    setMetodo(value);
  };

  // 4. Render.
  return (
    <div className="MetodoPago_container">
      <div className="MetodoPago_bannerContainer">
        <p>Información de la compra</p>
      </div>

      {/*Combobox de método de pago*/}
      <div className="MetodoPago_metodoContainer">
        <FormControl fullWidth>
          <InputLabel>Seleccione un metodo de pago</InputLabel>
          <Select
            id="MetodoPago"
            labelId="MetodoPago"
            variant="filled"
            color="primary"
            label="Metodo de pago"
            placeholder="Seleccione un metodo de pago"
            MenuProps={{
              style: Styles.menu,
            }}
            inputProps={{
              style: Styles.input,
            }}
            SelectDisplayProps={{
              style: Styles.select,
            }}
            value={metodo}
            required
            onChange={(event) => handleMetodo(event)}
          >
            <MenuItem id="0" value={"efectivo"}>
              Efectivo
            </MenuItem>
            <MenuItem id="1" value={"debito"}>
              Debito
            </MenuItem>
            <MenuItem id="2" value={"credito"}>
              Credito
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

// PropTypes.
MetodoPago.propTypes = {};

// Exportación.
export default MetodoPago;
