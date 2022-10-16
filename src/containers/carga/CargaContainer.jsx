// Dependencias.
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CargaPage from "../../pages/carga/CargaPage.jsx";
import PropTypes from "prop-types";

// API Handler.
// Hooks.
import { useLocalStorage } from "../../hooks/useLocalStorage.jsx";

// API Handlers.
import fetchUserData from "../../api/usuarios/fetchUserData.js";
import fetchUserProducts from "../../api/productos/fetchProducts.js";
import fetchUserVentas from "../../api/ventas/fetchVentas.js";

// Actions.
import { getUserData } from "../../redux/slices/usuariosSlice.js";
import { fetchProducts } from "../../redux/slices/productosSlice.js";
import { displayAlert } from "../../redux/slices/aplicacionSlice.js";
import { fetchVentas } from "../../redux/slices/ventasSlice.js";

// Definición del contenedor: <CargaContainer />.
const CargaContainer = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const dispatch = useDispatch();
  const [loadMessage, setLoadMessage] = useState("");
  const [loadPercent, setLoadPercent] = useState(0);
  const [inventario, setInventario] = useState([]);

  // 2. Ciclo de vida.
  useEffect(() => {
    let isSubscribed = true;

    // Metodos.
    const fetchStoreUser = async () => {
      console.log("[🛂] Consultando la información del usuario.");

      await fetchUserData()
        .then((userData) => {
          console.log("[] Se encontro la información del usuario!");
          dispatch(getUserData(userData));
        })
        .catch((error) => {
          console.log("[] Error al consultar la información del usuario!");
          console.log(error);

          // Mostrar alerta de error.
          const newAlert = {
            type: "error",
            title: "Información del usuario",
            message: "No se pudo cargar la información del usuario.",
          };
          dispatch(displayAlert(newAlert));
        });
    };

    const fetchStoreProducts = async () => {
      console.log("[🛂] Consultando los productos del inventario.");

      await fetchUserProducts()
        .then((listaProductos) => {
          console.log("[] Se encontraron los productos");
          dispatch(fetchProducts(listaProductos));
        })
        .catch((error) => {
          console.log("[] Error al consultar los productos");
          console.log(error);

          // Mostrar alerta de error.
          const newAlert = {
            type: "error",
            title: "Información de los productos",
            message: "No se pudo cargar la información de los productos.",
          };
          dispatch(displayAlert(newAlert));
        });
    };

    const fetchStoreVentas = async () => {
      console.log("[🛂] Consultando las ventas de la tienda.");

      await fetchUserVentas()
        .then((listaVentas) => {
          console.log("[] Se encontraron las ventas");

          dispatch(fetchVentas(listaVentas));
        })
        .catch((error) => {
          console.log("[] Error al consultar los productos");
          console.log(error);

          // Mostrar alerta de error.
          const newAlert = {
            type: "error",
            title: "Información de las ventas",
            message: "No se pudo cargar la información de las ventas.",
          };

          dispatch(displayAlert(newAlert));
        });
    };

    // Consultas.
    fetchStoreUser();
    fetchStoreProducts();
    fetchStoreVentas();

    setTimeout(() => {
      setLoadPercent(30);
    }, 2000);

    setTimeout(() => {
      setLoadPercent(60);
    }, 4000);

    setTimeout(() => {
      setLoadPercent(100);
    }, 5000);

    // Limpieza de las consultas.
    return () => {
      isSubscribed = false;
    };
  }, []);

  // 3. Metodos.
  // 4. Render.
  return <CargaPage message={loadMessage} percent={loadPercent} />;
};

// PropTypes.
CargaContainer.propTypes = {};

// Exportación.
export default CargaContainer;
