// Dependencias
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import LoadingPage from "../../pages/loading/LoadingPage.jsx";

// Actions.
import { fetchUserData } from "../../actions/user/fetchUserData.js";
import { fetchProducts } from "../../actions/productos/fetchProducts.js";

// Definición del contenedor: <LoadingContainer />
const LoadingContainer = (props) => {
  // -- Manejo del estado.
  const { fetchUserData, fetchProducts } = props;
  const [loadMessage, setLoadMessage] = useState("Iniciando procesos...");
  const [loadPercent, setLoadPercent] = useState(0);

  // -- Ciclo de vida.
  useEffect(() => {
    // Suscripción a eventos.
    let isSubscribed = true;

    // Metodos.
    const fetchUser = async () => {
      console.log("[🛂] Consultando la información del usuario.");

      const user = await fetchUserData()
        .then((userData) => {
          return userData;
        })
        .catch((error) => {
          console.error(error);
        });

      // Guardar la información del usuario.
      setTimeout(() => {
        setLoadMessage("Consultando la información del usuario...");
        setLoadPercent(50);
      }, 2000);
    };

    const fetchUserProducts = async () => {
      console.log("[🛂] Consultando los productos del inventario.");

      const userProducts = await fetchProducts()
        .then((userProducts) => {
          return userProducts;
        })
        .catch((error) => {
          console.error(error);
        });

      // Guardar la información del usuario.

      setTimeout(() => {
        setLoadMessage("Consultando los productos del inventario...");
        setLoadPercent(100);
      }, 4000);
    };

    // Fase 1: Cargar la información del usuario.
    fetchUser();

    // Fase 2: Cargando la información de los productos.
    fetchUserProducts();

    // Fase 3: ...

    // Limpieza.
    return () => {
      isSubscribed = false;
    };
  }, []);

  // -- Metodos.

  // -- Renderizado.
  return <LoadingPage message={loadMessage} percent={loadPercent} />;
};

// PropTypes.
LoadingContainer.propTypes = {};

// Redux
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  fetchUserData,
  fetchProducts,
};

// Exportación.
export default connect(mapStateToProps, mapDispatchToProps)(LoadingContainer);
