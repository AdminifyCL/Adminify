// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../../components/Navigation/Navigation.jsx";
import { CajaProductos } from "./components/CajaProductos.jsx";
import { CajaCarro } from "./components/CajaCarro.jsx";
import { CajaCajero } from "./components/CajaCajero.jsx";
import { CajaCierre } from "./components/CajaCierre.jsx";
import { CajaTotal } from "./components/CajaTotal.jsx";
import { CajaBotones } from "./components/CajaBotones.jsx";
import { Fab } from "@mui/material";
import { VscGear } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { publicURL, privateURL } from "../../schemas/Navigation.js";

// Actions.
import { displayAlert } from "../../redux/slices/aplicacionSlice.js";
import { clearMetodo } from "../../redux/slices/ventasSlice.js";
import { clearCarro } from "../../redux/slices/productosSlice.js";

// Importación de estilos.
import "./CajaPage.scss";

// Definición del componente: <CajaPage />
const CajaPage = (props) => {
  // -- Manejo del estado.
  const { productos, sendCarrito } = props;
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [canPay, setCanPay] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // -- Ciclo de vida.
  useEffect(() => {
    if (carrito.length > 0) {
      setCanPay(true);
    } else {
      setCanPay(false);
    }
  }, [carrito]);

  useEffect(() => {
    // Limpieza de los datos de la venta.
    dispatch(clearMetodo());
    dispatch(clearCarro());
  }, []);

  // -- Metodo.

  // -- Renderizado.
  return (
    <section>
      {/* Navegación de la aplicación. */}
      <section>
        <Navigation />
      </section>

      {/* Vista de la caja */}
      <section>
        <h1>Caja</h1>
      </section>
    </section>
  );
};

// Exportación de la pagina: Index.
export default CajaPage;
