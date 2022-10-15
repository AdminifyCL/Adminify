// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CajaPage from "../../pages/caja/CajaPage.jsx";
import { useSelector, useDispatch } from "react-redux";
import setCarrito from "../../api/productos/setCarrito.js";
import { setCarro } from "../../redux/slices/productosSlice.js";

// Definición del contenedor: <CajaContainer />.
const CajaContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const [productos, setProductos] = useState([]);
  const allProductos = useSelector((state) => state.producto.productos);

  // 2. Ciclo de vida.
  useEffect(() => {
    setProductos(allProductos);
  }, [allProductos]);

  // 3. Metodos.
  const handleCarritoProducts = async (productosCarro) => {
    // Establecer los productos en el carro.
    await setCarrito(productosCarro)
      .then((response) => {
        console.log("[] Carrito establecido.");
        useDispatch(setCarro(response));
      })
      .catch((error) => {
        console.log("[] Error al establecer el carrito.");
      });
  };

  // 4. Render.
  return <CajaPage productos={productos} sendCarrito={handleCarritoProducts} />;
};

// PropTypes.
CajaContainer.propTypes = {};

// Exportación.
export default CajaContainer;
