// Dependencias.
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

// Estilos.
import "./New.scss";

// Definición de la pagina.
const New = (props) => {
  // 1. Manejo de estados.
  const {} = props;
  const navigate = useNavigate();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <section className="">
      <h1>New</h1>
    </section>
  );
};

// PropTypes.
New.propTypes = {};

// Exportación.
export default New;
