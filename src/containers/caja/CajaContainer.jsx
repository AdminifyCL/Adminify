// Dependencias.
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import CajaPage from "../../pages/caja/CajaPage.jsx";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

// Action
import { setCarro, clearCarro } from "../../redux/slices/productosSlice.js";
import { clearMetodo } from "../../redux/slices/ventasSlice.js";

// Definición del contenedor: <CajaContainer />.
const CajaContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const [productos, setProductos] = useState([]);
  const allProductos = useSelector((state) => state.producto.productos);
  const dispatch = useDispatch();

  // 2. Ciclo de vida.
  useEffect(() => {
    setProductos(allProductos);
  }, [allProductos]);

  useEffect(() => {
    dispatch(clearCarro());
    dispatch(clearMetodo());
  }, []);

  // 3. Metodos.
  const handleCarritoProducts = async (productosCarro) => {
    // Establecer los productos en el carro.
    dispatch(setCarro(productosCarro));
  };

  // 4. Render.
  return (
    <Navbar>
      <CajaPage productos={productos} sendCarrito={handleCarritoProducts} />
    </Navbar>
  );
};

// PropTypes.
CajaContainer.propTypes = {};

// Exportación.
export default CajaContainer;
