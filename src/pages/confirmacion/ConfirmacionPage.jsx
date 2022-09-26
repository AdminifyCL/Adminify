// Dependencias.
import React from "react";
import { Button } from "@mui/material";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import { Step, Stepper, StepLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import fondo from "../../assets/images/bg-table.png";
import { FaReceipt, AiFillCheckCircle, FaCheckCircle } from "react-icons/fa";

// Estilos.
import "./ConfirmacionPage.scss";

// Definición del componente: <ConfirmacionPage />
const Estilos = {
  backgroundImage: fondo,
  backgroundColor: "red",
};
const ConfirmacionPage = ({}) => {
  // -- Manejo del estado.
  const navigate = useNavigate();
  // -- Ciclo de vida.
  // -- Metodos.
  const steps = ["Selección de productos", "Proceso de pago", "Confirmación de pago"];
  const handleImpresion = () => {
    const ventana = window.open("", "PRINT", "height=720,width=1280");
    ventana.document.write("Desea Imprimir la boleta, seleccione la impresora");
    ventana.document.close();
    ventana.focus();
    ventana.onload = function () {
      ventana.print();
      ventana.close();
    };
    const handleRedirect = () => {
      // Redirigir a la confirmación del pago
      navigate("/ventas");
    };
  };

  // -- Renderizado.
  return (
    <section className="">
      {/* Navegación */}
      <section className="">
        <TabNavigation />
      </section>

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
      <section style={Estilos}>
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
            <h1>Empleado: Gonzalo Cañas Madariaga</h1>
            <h1>Monto total: $4200</h1>
            <h1>Metodo de pago: Sodexo</h1>
            <h1>Numero de Productos: 1</h1>
            <h1>Fecha de venta: 07/03/2022</h1>
          </div>
        </div>

        <div className="confirmacionPage_contendorBotonesConfimacion">
          <Button onClick={() => handleImpresion()} variant="outlined">
            Imprimir
          </Button>

          <Button onClick={() => navigate("/caja")} variant="outlined">
            Volver a la caja
          </Button>

          <Button onClick={() => navigate("/ventas")} variant="contained">
            Ver ventas
          </Button>
        </div>
        <div className="confirmacionPage_stepper">
          <Stepper activeStep={3} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </section>
    </section>
  );
};

// Exportación.
export default ConfirmacionPage;
