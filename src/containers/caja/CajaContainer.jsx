// Dependencias.
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import CajaPage from "../../pages/caja/CajaPage.jsx";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

// Action
import { setCarro, clearCarro } from "../../redux/slices/productosSlice.js";
import { openCaja, closeCaja, aperturarCaja,cierreCaja, displayAlert } from "../../redux/slices/aplicacionSlice.js";
import { clearMetodo } from "../../redux/slices/ventasSlice.js";
import { displayAlert } from "../../redux/slices/aplicacionSlice.js";

// Definición del contenedor: <CajaContainer />.
const CajaContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const [productos, setProductos] = useState([]);
  const allProductos = useSelector((state) => state.producto.productos);
  const statusCaja = useSelector((state) => state.app.statusCaja);
  const horaApertura = useSelector( (state) => state.app.horaApertura);
  const horaCierre = useSelector( (state) => state.app.horaCierre);
  const ventas = useSelector( (state) => state.venta.ventas );
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
  const handleStatusCaja = (type) => {

    switch (type) {
      case "open":
        dispatch(openCaja());
        break;

      case "close":
        dispatch(closeCaja());
        break;

      default:
        return;
    }
  };

  const handleCarritoProducts = async (productosCarro) => {
    // Establecer los productos en el carro.
    dispatch(setCarro(productosCarro));
  };

  const handleApertura = () =>{
    const fecha = new Date()
    dispatch(aperturarCaja(fecha))
  }

  const handleCierre = () =>{
    const fecha = new Date()
    dispatch(cierreCaja(fecha))
  }

  const handleDisplayAlert = () => {
    const newAlert = {
      type:"success",
      title: "Caja",
      message: "Se ha abierto la caja"
    }
    dispatch(displayAlert(newAlert))
  }

  // 4. Render.
  return (
    <Navbar>
      <CajaPage
        productos={productos}
        sendCarrito={handleCarritoProducts}
        statusCaja={statusCaja}
        setStatus={handleStatusCaja}
        horaApertura={horaApertura}
        horaCierre={horaCierre}
        handleApertura={handleApertura}
        handleCierre={handleCierre}
        handleDisplayAlert={handleDisplayAlert}
        ventas = {ventas}
      />
    </Navbar>
  );
};

// PropTypes.
CajaContainer.propTypes = {};

// Exportación.
export default CajaContainer;
