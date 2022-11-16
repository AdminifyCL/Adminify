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

          {/* Seccion de resumen de productos*/}
          <section className="pagosPage_ProductosContenedor">
            <section className="pagosPage_ProductosContenido">
              <div className="pagosPage_ProductosCabecera">
                <p>Resumen de productos</p>
              </div>
              {/* Contenedor de productos*/}
              <div className="pagosPage_ProductosLista">{mappingCarroProducts()}</div>
            </section>
          </section>

          {/* Contenedor de valor total*/}
          <section className="pagosPage_ProductosTotal">
            <p>Total:</p>
            <p className="pagosPage_totalValor">{mappingTotal()}</p>
          </section>

          {/* Sección agregar cliente*/}
          {/* Checkbox para decidir si agregar o no cliente*/}
          {/* <section className="pagosPage_TituloCliente">
            <p>
              ¿Desea agregar un cliente? 
              <Checkbox
                onChange={() => setMostrarComponente(!mostrarComponente)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </p>
          </section> */}

          {/* Si el checkbox es activado lanza el formulario*/}
          {/* <div className={!mostrarComponente ? "show-elementPagos" : null}>
            {!mostrarComponente && <FormCliente />}
          </div> */}

          {/*Sección de información de compra (Método de pago)*/}
          <section className="pagosPage_InfoCompraContenedor">
            <div className="pagosPage_InfoCompraTitulo">
              <p>Información de la compra</p>
            </div>

            {/*Combobox de método de pago*/}
            <div className="pagosPage_ComboBox">
              <Box sx={{ minWidth: 500 }}>
                <FormControl variant="filled" fullWidth>
                  <InputLabel id="simple-select-labelPago">Método de Pago</InputLabel>
                  <Select
                    labelId="simple-select-labelPago"
                    id="simple-selectPago"
                    value={pago}
                    label="pago"
                    onChange={handleChangePago}
                  >
                    <MenuItem value={1}>Efectivo</MenuItem>
                    <MenuItem value={2}>Débito</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>

            {/*Botones de información de compra*/}
            <section className="pagosPage_InfoCompraContenido">
              <div className="pagosPage_CancelarBoton">
                <Button onClick={() => navigate("/caja")} variant="outlined">
                  Cancelar compra
                </Button>
              </div>
              <Button onClick={() => handleRedirect()} variant="contained" disabled={!isActive}>
                Confirmar pago
              </Button>
              <PagosImpresion
                productos={carroProducts}
                activo={!isActive}
                redirigir={handleRedirect}
              ></PagosImpresion>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

// PropTypes.
PagosPage.propTypes = {};

// Exportación.
export default PagosPage;
