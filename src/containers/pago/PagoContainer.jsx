// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import PagosPage from "../../pages/pagos/PagosPage.jsx";

// API
import createVenta from "../../api/ventas/createVenta.js";

// Actions
import { setMetodo, appendVenta } from "../../redux/slices/ventasSlice.js";
import { displayAlert } from "../../redux/slices/aplicacionSlice.js";

// Definición del contenedor: <PagoContainer />.
const PagoContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const carroProducts = useSelector((state) => state.producto.carrito);
  const userData = useSelector((state) => state.user.userData);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const dispatch = useDispatch();

  // 2. Ciclo de vida.
  useEffect(() => {
    handleTotalProductos();
  }, [carroProducts]);

  // 3. Metodos.
  const handleTotalProductos = () => {
    let totalProductos = 0;
    let cantidadProductos = 0;

    carroProducts.forEach((producto) => {
      totalProductos = totalProductos + producto.precio * producto.cantidad;
      cantidadProductos = cantidadProductos + producto.cantidad;
    });

    setTotal(totalProductos);
    setCantidad(cantidadProductos);
  };

  const handleMetodoPago = (metodo) => {
    dispatch(setMetodo(metodo));
  };

  const handleVenta = async (metodo) => {
    const new_venta = {
      // Información de la venta.
      id: "",
      fecha: 0,
      metodo: metodo,
      total: total,
      cantidad: cantidad,
      // Información de los productos.
      productos: carroProducts,

      // Información del vendedor.
      vendedor: {
        uid: userData.uid,
        nombre: userData.username,
        email: userData.email,
      },

      // Información del cliente.
      cliente: {
        uid: "",
        nombre: "",
        correo: "",
        numero: "",
        isAnonimo: true,
      },
    };

    const tiendaId = userData.tiendaId;

    // Creación de la venta.
    await createVenta(tiendaId, new_venta)
      .then((ventaData) => {
        console.log("[] Se creo una nueva venta.");

        let newAlert = {
          type: "success",
          title: "Venta confirmada",
          message: "La venta se registro en la base de datos.",
        };

        console.log("[] ventaData: ", ventaData);

        dispatch(displayAlert(newAlert));
        dispatch(appendVenta(ventaData));
      })
      .catch((error) => {
        console.error(error);

        let newAlert = {
          type: "error",
          title: "Error al confirmar la venta",
          message: "Ocurrio un error al registrar la venta.",
        };

        dispatch(displayAlert(newAlert));
      });

    // Actualización de los productos en el inventario.
    // TODO: Para hacer en un futuro.
  };

  // 4. Render.
  return (
    <PagosPage carroProducts={carroProducts} setMetodo={handleMetodoPago} setVenta={handleVenta} />
  );
};

// PropTypes.
PagoContainer.propTypes = {};

// Exportación.
export default PagoContainer;
