// Dependencias.
import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaBreadSlice, FaHotdog } from "react-icons/fa";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import "./Product.scss";

// Definición del componente: <ProductCard />
const ProductCard = (props) => {
  // -- Manejo del estado.
  const { info, editProduct, deleteProduct } = props;

  // -- Ciclo de vida.
  useEffect(() => {}, []);

  // -- Metodos.
  const handleEditProduct = async () => {
    await editProduct(info);
  };

  const handleDeleteProduct = async () => {
    await deleteProduct(info);
  };

  const handlerIcon = (iconId) => {
    switch (iconId) {
      // Icono de pan.
      case "icono001":
        return <FaBreadSlice size={30} color="white" />;
        break;

      // Icono de hotdog.
      case "icono002":
        return <FaHotdog size={30} color="white" />;
        break;

      default:
        return <FaBreadSlice size={30} color="white" />;
        break;
    }
  };

  // -- Renderizado.
  return (
    <div className="ProductCard-container">
      {/* Icono */}
      <div className="ProductCard-iconContainer">
        {handlerIcon(info.iconoId)}
        <p>{info.unidades}</p>
      </div>

      {/* Información */}
      <div className="ProductCard-infoContainer">
        <p className="ProductCard-infoContainer-categoria">{info.categoria}</p>
        <p className="ProductCard-infoContainer-nombre">{info.nombre}</p>
        <p className="ProductCard-infoContainer-valor">${info.valor}</p>
      </div>

      {/* Botones de acción */}
      <div className="ProductCard-botonesContainer">
        <IconButton onClick={() => handleDeleteProduct()}>
          <FaTrash size={15} />
        </IconButton>

        <IconButton onClick={() => handleEditProduct()}>
          <FaEdit size={15} />
        </IconButton>
      </div>
    </div>
  );
};

// Proptypes
ProductCard.propTypes = {
  info: PropTypes.object.isRequired,
};

// Exportación.
export default ProductCard;
