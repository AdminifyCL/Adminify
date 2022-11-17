// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import VentasPage from "../../pages/ventas/VentasPage.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

// Actions.
import APIdeleteVenta from "../../api/ventas/deleteVenta.js";
import { removeVenta } from "../../redux/slices/ventasSlice.js";
import { displayAlert } from "../../redux/slices/aplicacionSlice.js";

// Definición del contenedor: <VentasContainer />.
const VentasContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const userData = useSelector((state) => state.user.userData);
  const ventas = useSelector((state) => state.venta.ventas);
  const dispatch = useDispatch();
  const [cargando, setCargando] = useState(false);

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleRemoveVenta = async (ventaData) => {
    setCargando(true);

    const tiendaId = userData.tiendaId;
    await APIdeleteVenta(ventaData, tiendaId)
      .then(async (response) => {
        // Mostrar alerta.
        let new_alert = {
          title: "Venta",
          message: "Venta eliminada correctamente.",
          type: "success",
        };

        dispatch(displayAlert(new_alert));
        return;
      })
      .catch((error) => {
        // Mostrar alerta.
        let new_alert = {
          title: "Venta",
          message: "No se pudo eliminar la venta.",
          type: "error",
        };

        dispatch(displayAlert(new_alert));
        return;
      });

    console.log("[] VENTAS DATA:", ventaData);
    dispatch(removeVenta(ventaData));
    setCargando(false);
  };

  // 4. Render.
  console.log("[] CARGANDO", cargando);
  return (
    <Navbar>
      <VentasPage ventas={ventas} cargando={cargando} removeVenta={handleRemoveVenta} />
    </Navbar>
  );
};

// PropTypes.
VentasContainer.propTypes = {};

// Exportación.
export default VentasContainer;
