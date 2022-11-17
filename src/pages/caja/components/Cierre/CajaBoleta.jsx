//Dependencias
import React, { useRef } from "react";
import { CajaImpresion } from "./CajaImpresion.jsx";

//Estilos
import "./CajaBoleta.scss";
import { Button } from "@mui/material";

export function CajaBoleta(props) {
  const { datos, apertura, cierre, generarBoleta, handleConfirmacion, confirmacion } = props;
  const referenciaBoleta = useRef()

  function getHora(fecha) {
    const fechaString = fecha.toLocaleString();
    const fechaArray = fechaString.split(", ");
    return fechaArray[1];
  }

  if (confirmacion) {
    return (
      <>
        <section className="cajaPage_boleta_container" ref={referenciaBoleta}>
          <div className="cajaPage_boleta_datos">
            <h3>Cierre de turno</h3>
            <p>Fecha: 17-11-2022</p>
            <p>Hora: {getHora(apertura)}</p>
            <p>Cajero: {datos[0]} </p>
          </div>
          <div className="cajaPage_boleta_horas">
            <p>Apertura: {getHora(apertura)}</p>
            <p>Cierre: {getHora(cierre)}</p>
          </div>
          <div className="cajaPage_boleta_recaudo">
            <h3>Recaudacion</h3>
            <p>Efectivo: ${datos[1]}</p>
            <p>Debito: ${datos[2]}</p>
            <p>Credito: ${datos[3]}</p>
            <p>Total: ${datos[4]}</p>
          </div>
        </section>
        <section className="cajaPage_boleta_modal">
          <p>Se realizara la impresion de la boleta</p>
          <div>
            {/* <Button
              variant="contained"
              onClick={() => {
                generarBoleta();
                handleConfirmacion();
              }}
            >
              Aceptar
            </Button> */}
            <CajaImpresion referencia = {referenciaBoleta} generarBoleta={generarBoleta} handleConfirmacion={handleConfirmacion}></CajaImpresion>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <section className="cajaPage_boleta_container" ref={referenciaBoleta}>
        <div className="cajaPage_boleta_datos">
          <h3>Cierre de turno</h3>
          <p>Fecha: 17-11-2022</p>
          <p>Hora: {getHora(apertura)}</p>
          <p>Cajero: {datos[0]} </p>
        </div>
        <div className="cajaPage_boleta_horas">
          <p>Apertura: {getHora(apertura)}</p>
          <p>Cierre: {getHora(cierre)}</p>
        </div>
        <div className="cajaPage_boleta_recaudo">
          <h3>Recaudacion</h3>
          <p>Efectivo: ${datos[1]}</p>
          <p>Debito: ${datos[2]}</p>
          <p>Credito: ${datos[3]}</p>
          <p>Total: ${datos[4]}</p>
        </div>
      </section>
    );
  }
}
