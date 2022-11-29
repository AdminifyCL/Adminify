// Dependencias.
import React, { useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import StatsContainer from "./components/Stats/StatsContainer.jsx";
import CardsContainer from "./components/Cards/CardsContainer.jsx";

// Estilos.
import "./VentasPage.scss";

// Definición del componente: <VentasPage />
const VentasPage = (props) => {
  // 1. Manejo del estado.
  const { storeVentas } = props;
  const inicialData = {
    cajero:"",
    fecha:"",
    metodo:"",
    total:0,
    productos:[]
  }
  const [datosBoleta, setDatos] = useState(inicialData);
  const referencia = useRef()

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.

  const definirDatos = (data) => {
    setDatos(data);
  };

  // 4. Render.
  return (
    <section className="ventasPage_container">

      <aside ref={referencia} className="boleta">
        <p>****Boleta****</p>
        <p>Cajero : {datosBoleta.cajero}</p>
        <p>Fecha : {datosBoleta.fecha}</p>
        <p>Metodo : {datosBoleta.metodo}</p>  
        <p>PRODUCTOS</p>   
        { datosBoleta.productos.map((producto)=>{
          return <p>- ({producto.cantidad}) {producto.nombre} ${producto.precio}</p>
        })}
        <p>Totta de venta : ${datosBoleta.total}</p>
      </aside>

      {/* Vista de la caja. */}
      <section className="ventasPage_content">
        {/* Estadisticas parciales. */}
        <StatsContainer storeVentas={storeVentas} />

        {/* Ventas. */}
        <CardsContainer storeVentas={storeVentas} definirDatos={definirDatos} referencia={referencia}/>
      </section>
    </section>
  );
};

// PropTypes.
VentasPage.propTypes = {};

// Exportación.
export default VentasPage;
