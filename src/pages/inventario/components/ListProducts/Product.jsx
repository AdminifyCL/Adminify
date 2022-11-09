// Dependencias.
import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaBreadSlice, FaHotdog } from "react-icons/fa";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";

// Estilos.
import "./Product.scss";

// Definición del componente: <ProductCard />
const ProductCard = (props) => {
  // -- Manejo del estado.
  const { info } = props;

  // -- Ciclo de vida.
  useEffect(() => {}, []);

  // -- Metodos.
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

  const handlerDisponibility = () => {
    return info.unidades > 0 ? "Disponible" : "No disponible";
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
        <IconButton>
          <FaTrash size={15} />
        </IconButton>
        <IconButton>
          <FaEdit size={15} />
        </IconButton>
      </div>
    </div>
  );
};

/**
 * categoria "Sandwich"
 * iconoId "icono001"
 * nombre "Completo con papas"
 * unidades 32
 * valor 6900
 */

// Proptypes
ProductCard.propTypes = {
  info: PropTypes.object.isRequired,
};

// Exportación.
export default ProductCard;

// Hojas: FaPagelines
// Manzana: FaAppleAlt
// Tocino: FaBacon
// Cerveza: FaBeer
// PAN: FaBreadSlice
// Zanahoria: FaCarrot
// Queso: FaCheese
// Cafe: FaCoffee
// Galleta: FaCookie
// Pollo: FaDrumstickBite
// Huevo: FaEgg
// Pescado: FaFish
// Vaso: FaGlassWhiskey
// Hamburguesa: FaHamburger
// Hotdog: FaHotdog
// Helado: FaIceCream
// Hoja: FaLeaf
// Limon: FaLemon
// Pizza: FaPizzaSlice
