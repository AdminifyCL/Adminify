// Dependencias.
import React, { useState, useEffect } from "react";
import Stats from "./Stats.jsx";

// Estilos
import "./StatsContainer.scss";

// Definición del componente: <StatsContainer />
const StatsContainer = (props) => {
  // 1. Manejo del estado.
  const { storeVentas } = props;
  const [numVentas, setNumVentas] = useState(0);
  const [totalVentas, setTotalVentas] = useState(0);
  const [ventasEfectivo, setVentasEfectivo] = useState(0);
  const [ventasDebito, setVentasDebito] = useState(0);

  // 2. Ciclo de vida.
  useEffect(() => {
    handleStats();
  }, [storeVentas]);

  // 3. Metodos.
  const handleStats = () => {
    let ganancias = 0;
    let numEfectivo = 0;
    let numDebito = 0;

    storeVentas.forEach((venta) => {
      ganancias = ganancias + venta.total;

      if (venta.metodo === "Efectivo") {
        numEfectivo = numEfectivo + 1;
      } else {
        numDebito = numDebito + 1;
      }
    });

    setNumVentas(storeVentas.length);
    setTotalVentas(ganancias);
    setVentasEfectivo(numEfectivo);
    setVentasDebito(numDebito);
  };

  // 4. Render.
  return (
    <div className="StatsContainer-container">
      {/* HEader */}
      <div className="StatsContainer-header">
        <h1>Gestión de ventas</h1>
      </div>

      {/* Estadisticas */}
      <div className="StatsContainer-stats">
        <Stats titulo="Ventas realizadas" valor={numVentas} iconId="CashRegister" />
        <Stats titulo="Ganancias totales" valor={`$${totalVentas}`} iconId="Calculator" />
        <Stats titulo="Ventas con Efectivo" valor={ventasEfectivo} iconId="" />
        <Stats titulo="Ventas con Debito" valor={ventasDebito} iconId="" />
      </div>
    </div>
  );
};

// PropTypes.
StatsContainer.propTypes = {};

// Exportación.
export default StatsContainer;
