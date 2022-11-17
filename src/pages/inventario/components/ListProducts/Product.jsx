// Dependencias.
import React, { useEffect, useState } from "react";
import {
  FaTrash,
  FaEdit,
  FaBreadSlice,
  FaHotdog,
  FaRegFrown,
  FaHamburger,
  FaCoffee,
  FaCookie,
  FaPizzaSlice,
  FaIceCream,
} from "react-icons/fa";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import "./Product.scss";

// Definición del componente: <ProductCard />
const ProductCard = (props) => {
  // -- Manejo del estado.
  const { info, editModal, deleteModal, setProducto } = props;

  // -- Ciclo de vida.
  useEffect(() => {}, []);

  // -- Metodos.
  const handleEditProduct = async () => {
    setProducto(info);
    editModal(true);
  };

  const handleDeleteProduct = async () => {
    setProducto(info);
    deleteModal(true);
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

      case "icono003":
        return <FaHamburger size={30} color="white" />;

      case "icono004":
        return <FaCoffee size={30} color="white" />;

      case "icono005":
        return <FaCookie size={30} color="white" />;

      case "icono006":
        return <FaPizzaSlice size={30} color="white" />;

      case "icono007":
        return <FaIceCream size={30} color="white" />;

      default:
        return <FaRegFrown size={30} color="white" />;
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
