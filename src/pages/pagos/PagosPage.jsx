// Dependencias.
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { publicURL, privateURL } from "../../schemas/Navigation.js";
import FormCliente from "./components/FormCliente/FormCliente.jsx";
import Productos from "./components/Productos/Productos.jsx";
import Total from "./components/Total/Total.jsx";
import MetodoPago from "./components/MetodoPago/MetodoPago.jsx";
import Buttons from "./components/Buttons/Buttons.jsx";
import PagoStepper from "./components/PagoStepper/PagoStepper.jsx";
import PropTypes from "prop-types";

// Estilos.
import "./PagosPage.scss";

// Definición del componente: <PagosPage />
const PagosPage = (props) => {
  // 1. Manejo del estado.
  const { carroProducts, setMetodo, setVenta, cargando } = props;
  const navigate = useNavigate();
  const [metodoPago, setMetodoPago] = useState("");
  const [active, setActive] = useState(false);

  // 2. Ciclo de vida.
  useEffect(() => {
    if (metodoPago !== "") {
      setActive(true);
    }
    setActive(false);
  }, [metodoPago]);

  // 3. Metodos.
  const toConfirmacion = async () => {
    await setMetodo(metodoPago);
    await setVenta(metodoPago);

    navigate(privateURL.confirmacion);
  };

  const toCaja = () => {
    navigate(privateURL.caja);
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
            <Total productos={carroProducts} />

            {/* Metodo de pago */}
            <MetodoPago metodo={metodoPago} setMetodo={setMetodoPago} />

            {/* Botones */}
            <Buttons
              productos={carroProducts}
              toCaja={toCaja}
              toConfirmacion={toConfirmacion}
              metodo={metodoPago}
              cargando={cargando}
            />
          </div>
        </div>

        {/* Resultados */}
        <div className="pagosPage_resultadosContainer">
          {/* Stepper */}
          <PagoStepper />
        </div>
      </div>
    </section>
  );
};

// PropTypes.
PagosPage.propTypes = {};

// Exportación.
export default PagosPage;
