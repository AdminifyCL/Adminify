// Dependencias.
<<<<<<< HEAD
import React, { useState, useEffect,useRef } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
=======
import React, { useState, useEffect } from "react";
>>>>>>> main
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

  const referenciaBoleta = useRef()
  // 1. Manejo del estado.
  const { carroProducts, setMetodo, setVenta, cargando } = props;
  const navigate = useNavigate();
<<<<<<< HEAD
  const label = { inputProps: { "aria-label": "Checkbox cliente" } };
  const [checked, setChecked] = useState(true);
  const [pago, setPago] = useState("");
  const [print ,setPrint] = useState(false)
  const [isActive, setIsActive] = useState(false);
  const [mostrarComponente, setMostrarComponente] = useState(true);
  const steps = ["Selección de productos", "Proceso de pago", "Pago confimado"];
=======
  const [metodoPago, setMetodoPago] = useState("");
  const [active, setActive] = useState(false);
>>>>>>> main

  // 2. Ciclo de vida.
  useEffect(() => {
    if (metodoPago !== "") {
      setActive(true);
    }
    setActive(false);
  }, [metodoPago]);

  // 3. Metodos.
<<<<<<< HEAD
  const visibilizar = () => {
    setPrint(!print)
  }

  const handleRedirect = async () => {
    // Redirigir a la confirmación del pago
    if (isActive) {
      // Configurando la venta.
      await setVenta(pago);
=======
  const toConfirmacion = async () => {
    await setMetodo(metodoPago);
    await setVenta(metodoPago);
>>>>>>> main

    navigate(privateURL.confirmacion);
  };

<<<<<<< HEAD
  const handleChangePago = (event) => {
    let nuevo_metodo = event.target.value;
    if (nuevo_metodo === 1) {
      setPago("Efectivo");
    } else {
      setPago("Debito");
    }

    setIsActive(true);
  };

  function formatNumber(number) {
    return new Intl.NumberFormat('de-DE').format(number)
  }

  const mappingCarroProducts = () => {
    return carroProducts.map((product, index) => {
      return (
        <div className="pagosPage_productContainer" key={`${index}-product`}>
          <div className="pagosPage_Cantidad">{product.cantidad}</div>
          <div className="pagosPage_Producto">{product.nombre}</div>
          <div className="pagosPage_Valor">${formatNumber(product.precio)}</div>
        </div>
      );
    });
  };

  const mappingTotal = () => {
    let total = 0;

    carroProducts.map((product) => {
      total = total + product.precio * product.cantidad;
    });

    return `$${formatNumber(total)}`;
=======
  const toCaja = () => {
    navigate(privateURL.caja);
>>>>>>> main
  };

  // 4. Render.
  return (
    <section className="pagosPage_Contenedor">
      <div className="pagosPage_contenido">
        {/* Banner */}
        <div className="pagosPage_Titulo">
          <h1>Información del pago</h1>
        </div>
<<<<<<< HEAD
        <div ref = { referenciaBoleta } className="pagosPage_boleta">
          <h1>Productos</h1>
          <div>
          {carroProducts.map((producto)=>{
            return <p>- {producto.cantidad} {producto.nombre}</p>
          })}
          </div>
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
=======

        {/* Contenido */}
        <div className="pagosPage_contenidoContainer">
          {/* Lista de los productos. */}
          <div className="pagosPage_productosContainer">
            <Productos productos={carroProducts} />
>>>>>>> main
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

<<<<<<< HEAD
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
              <PagosImpresion referencia={referenciaBoleta} productos={carroProducts} activo={!isActive} redirigir={handleRedirect}></PagosImpresion>
            </section>
          </section>
        </section>
      </section>
=======
        {/* Resultados */}
        <div className="pagosPage_resultadosContainer">
          {/* Stepper */}
          <PagoStepper />
        </div>
      </div>
>>>>>>> main
    </section>
  );
};

// PropTypes.
PagosPage.propTypes = {};

// Exportación.
export default PagosPage;
