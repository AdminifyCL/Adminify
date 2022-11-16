// Dependencias.
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "./Product.jsx";

// Estilos.
import "./ListProducts.scss";

// Definición del componente: <ListProducts />
const ListProducts = (props) => {
  // -- Manejo del estado.
  const { productos, editModal, deleteModal, setProducto } = props;
  // -- Ciclo de vida.
  useEffect(() => {}, []);

  // -- Metodos.
  const mappingRows = () => {
    let numProducts = productos.length;
    if (numProducts === 0) {
      return null;
    }

    return productos.map((producto, index) => {
      return (
        <ProductCard
          info={producto}
          key={index}
          editModal={editModal}
          deleteModal={deleteModal}
          setProducto={setProducto}
        />
      );
    });
  };

  // -- Renderizado.
  return (
    <div className="ListProductsContainer">
      {/* Listar productos */}
      {mappingRows()}
    </div>
  );
};

// Proptypes
ListProducts.propTypes = {
  productos: PropTypes.array.isRequired,
};

// Exportación.
export default ListProducts;
