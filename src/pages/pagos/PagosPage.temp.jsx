// Dependencias.
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Checkbox,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import PropTypes from "prop-types";
import FormCliente from "./components/FormCliente/FormCliente.jsx";
import PagosImpresion from "./components/PagosImpresion/PagosImpresion.jsx";

// Estilos.
import "./PagosPage.scss";

// Definición del componente: <PagosPage />
const PagosPage = (props) => {
  // 1. Manejo del estado.
  const { carroProducts, setMetodo, setVenta } = props;
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox cliente" } };
  const [checked, setChecked] = useState(true);
  const [pago, setPago] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const steps = ["Selección de productos", "Proceso de pago", "Pago confimado"];

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleRedirect = async () => {
    // Redirigir a la confirmación del pago
    if (isActive) {
      // Configurando la venta.
      await setVenta(pago);

      navigate("/confirmacion");
      setMetodo(pago);
    }
  };

  const handleChangePago = (event) => {
    let nuevo_metodo = event.target.value;
    if (nuevo_metodo === 1) {
      setPago("Efectivo");
    } else {
      setPago("Debito");
    }

    setIsActive(true);
  };

  const mappingCarroProducts = () => {
    return carroProducts.map((product, index) => {
      return (
        <div className="pagosPage_productContainer" key={`${index}-product`}>
          <div className="pagosPage_Cantidad">{product.cantidad}</div>
          <div className="pagosPage_Producto">{product.nombre}</div>
          <div className="pagosPage_Valor">${product.precio}</div>
        </div>
      );
    });
  };

  const mappingTotal = () => {
    let total = 0;

    carroProducts.map((product) => {
      total = total + product.precio * product.cantidad;
    });

    return `$${total}`;
  };

  // 4. Render.
  return (
    <section>
      {/* Visual */}
      <section className="pagosPage_Contenedor">
        <div className="pagosPage_Titulo">
          <h1>Pago</h1>
        </div>

        <section className="pagosPage_Contenido">
          {/* Stepper de la pagosPage */}
          <div className="pagosPage_stepper">
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </section>
      </section>
    </section>
  );
};

// PropTypes.
PagosPage.propTypes = {};

// Exportación.
export default PagosPage;
