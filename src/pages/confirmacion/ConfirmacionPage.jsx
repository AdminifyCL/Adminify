// Dependencias.
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Step, Stepper, StepLabel, Button } from "@mui/material";
import ReactPDF from "@react-pdf/renderer";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDFFile from "./components/PDFFile.jsx";
import PropTypes from "prop-types";

// Estilos.
import "./ConfirmacionPage.scss";

// Definición del componente: <ConfirmacionPage />
const ConfirmacionPage = (props) => {
  // 1. Manejo del estado.
  const { carroProducts, metodo } = props;
  const navigate = useNavigate();
  const steps = ["Selección de productos", "Proceso de pago", "Confirmación de pago"];

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleImpresion = () => {
    const ventana = window.open("", "PRINT", "height=720,width=1280");
    ventana.document.write("Desea Imprimir la boleta, seleccione la impresora");

    ventana.document.close();
    ventana.focus();
    ventana.onload = function () {
      ventana.print();
      ventana.close();
    };
  };

  const mostratPDF = () => {
    const ventana = window.open("", "PRINT", "height=720,width=1280");
    ventana.document.write("Desea Imprimir la boleta, seleccione la impresora");
    //ventana.document.close();
    ventana.focus();
    ventana.onload = function () {
      ventana.print();
      ventana.close();
    };
    return (
      <div className="confirmacionPage_PDF">
        <PDFDownloadLink document={<PDFFile />} fileName="FORM">
          {({ loading }) => (loading ? <Button> cargando </Button> : <Button> descargar </Button>)}
        </PDFDownloadLink>
      </div>
    );
  };

  const handleMontoTotal = () => {
    let total = 0;

    carroProducts.forEach((item) => {
      total = total + item.precio * item.cantidad;
    });

    return `$${total}`;
  };

  const handleTotalProductos = () => {
    let total = 0;

    carroProducts.forEach((item) => {
      total = total + item.cantidad;
    });

    return total;
  };

  const handleActualDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  // 4. Render.
  return (
    <section className="">
      {/* Visual */}
      <div className="confirmacionPage_stepper">
        <Stepper activeStep={3} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <section className="ConfirmaciónPage-container">
        <div className="confirmacionPage_titulo">
          <h1>¡Pago confirmado!</h1>
          <div className="confirmacionPage_subtitulo">
            <h3>
              Se confirmo la transacción, toda la información de la venta se podra encontrar en la
              base de datos de ventas.
            </h3>
          </div>
        </div>

        <div className="confirmacionPage_contendorDatos">
          <div className="confirmacionPage_contendorTitulo">
            <h1>Resumen de la venta</h1>
          </div>
          <div className="confirmacionPage_contendorDatosFinales">
            <h1>Empleado: Javier Almarza</h1>
            <h1>Monto total: {handleMontoTotal()}</h1>
            <h1>Metodo de pago: {metodo}</h1>
            <h1>Cantidad de Productos: {handleTotalProductos()}</h1>
            <h1>Fecha de venta: {handleActualDate()}</h1>
          </div>
        </div>

        <div className="confirmacionPage_contendorBotonesConfimacion">
          <Button onClick={() => navigate("/caja")} variant="outlined">
            Volver a la caja
          </Button>

          <Button onClick={() => navigate("/ventas")} variant="contained">
            Ver ventas
          </Button>
        </div>
      </section>
    </section>
  );
};

// PropTypes.
ConfirmacionPage.propTypes = {};

// Exportación.
export default ConfirmacionPage;
