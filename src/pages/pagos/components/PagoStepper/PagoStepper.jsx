// Dependencias.
import React, { useState, useEffect } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import Styles from "./PagoStepper.styles.jsx";
import "./PagoStepper.scss";

// Definición del componente: <PagoStepper />
const PagoStepper = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const steps = ["Selección de productos", "Proceso de pago", "Pago confimado"];

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <div className="PagoStepper_container">
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

// PropTypes.
PagoStepper.propTypes = {};

// Exportación.
export default PagoStepper;
