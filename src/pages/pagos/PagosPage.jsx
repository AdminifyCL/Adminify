// Dependencias.
import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
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
import Productos from "./components/Productos/Productos.jsx";

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
    <section className="pagosPage_Contenedor">
      <div className="pagosPage_contenido">
        {/* Banner */}
        <div className="pagosPage_Titulo">
          <h1>Información del pago</h1>
        </div>

        {/* Contenido */}
        <div className="pagosPage_contenidoContainer">
          {/* Lista de los productos. */}
          <div className="pagosPage_productosContainer">
            <Productos productos={carroProducts} />
          </div>

          {/* Información de la venta */}
          <div className="pagosPage_infoContainer">
            {/* Total de la venta. */}
            <div>Total</div>

            {/* Metodo de pago */}
            <div>Metodo</div>

            {/* Botones */}
            <div>Botones</div>
          </div>
        </div>

        {/* Resultados */}
        <div className="pagosPage_resultadosContainer">
          {/* Stepper */}
          <div>Master Blaster</div>
        </div>
      </div>
    </section>
  );
};

// PropTypes.
PagosPage.propTypes = {};

// Exportación.
export default PagosPage;
