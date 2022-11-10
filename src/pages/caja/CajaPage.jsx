// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

// Actions.

// Importación de estilos.
import "./CajaPage.scss";

// Definición del componente: <CajaPage />
const CajaPage = (props) => {
  // -- Manejo del estado.
  const {} = props;

  // -- Ciclo de vida.
  useEffect(() => {}, []);

  // -- Metodo.
  // -- Renderizado.
  return (
    <section className="cajaPage_container">
      {/* Vista de la caja. */}
      <section className="cajaPage_content">
        {/* Productos. */}
        <div>
          {/* Lista de productos */}
          <p>Lista de productos</p>
        </div>

        {/* Caja. */}
        <div>
          {/* Carro de compra */}
          <p>Carro de compra</p>

          {/* Total */}
          <p>Total</p>

          {/* Botones */}
          <p>Botones</p>
        </div>
      </section>
    </section>
  );
};

// Exportación de la pagina: Index.
export default CajaPage;
