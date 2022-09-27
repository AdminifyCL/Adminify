// Dependencias.
import React, { useEffect, useState } from "react";
import { FaHamburger } from "react-icons/fa";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

// Estilos.
import "./Product.scss";

// Definición del componente: <ListProducts />
const ListProducts = (props) => {
  // -- Manejo del estado.
  const { info } = props;

  // -- Ciclo de vida.
  useEffect(() => {}, []);

  // -- Metodos.
  const handlerIcon = (iconId) => {
    return <FaHamburger size={20} />;
  };

  const handlerDisponibility = () => {
    return info.unidades > 0 ? "Disponible" : "No disponible";
  };

  // -- Renderizado.
  return (
    <div className="ProductContainer">
      {/* Icono */}
      <div className="ProductContainer-icon">
        <p>{handlerIcon(info.icono)}</p>
      </div>

      {/* Categoria */}
      <div className="ProductContainer-categoria">
        <p>{info.categoria}</p>
      </div>

      {/* Nombre */}
      <div className="ProductContainer-nombre">
        <p>{info.nombre}</p>
      </div>

      {/* Valor */}
      <div className="ProductContainer-valor">
        <p>${info.valor}</p>
      </div>

      {/* Unidades */}
      <div className="ProductContainer-unidades">
        <p>{info.unidades}</p>
      </div>

      {/* Disponibilidad */}
      <div className="ProductContainer-disponibility">
        <p>{handlerDisponibility()}</p>
      </div>

      <div className="ProductContainer-buttons">
        <Button variant="outlined">Eliminar</Button>
        <Button variant="contained">Editar</Button>
      </div>
    </div>
  );
};

/**
 * categoria: "vienesa"
 * icono: "ab002"
 * id: "XZAh2HLVgeYa63xExyk9"
 * nombre: "Completo italiano"
 * unidades: 21
 * valor: 2500
 */

// Proptypes
ListProducts.propTypes = {
  info: PropTypes.object.isRequired,
};

// Exportación.
export default ListProducts;
