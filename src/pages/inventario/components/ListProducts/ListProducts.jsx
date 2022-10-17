// Dependencias.
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Product from "./Product";

// Estilos.
import "./ListProducts.scss";

// Definición del componente: <ListProducts />
const ListProducts = (props) => {
  // -- Manejo del estado.
  const { productos } = props;
  // -- Ciclo de vida.
  useEffect(() => {}, []);

  // -- Metodos.
  const mappingRows = () => {
    let numProducts = productos.length;
    if (numProducts === 0) {
      return (
        <div>
          <h1>Aún no agregas productos</h1>
        </div>
      );
    }

    return productos.map((producto, index) => {
      return <Product info={producto} key={index} />;
    });
  };

  // -- Renderizado.
  return (
    <div className="ListProductsContainer">
      {/* Listar las filas */}
      <div className="ListProductsRow">
        {/* Listar las columnas */}
        {mappingRows()}
      </div>
    </div>
  );
};

// Proptypes
ListProducts.propTypes = {
  productos: PropTypes.array.isRequired,
};

// Exportación.
export default ListProducts;
