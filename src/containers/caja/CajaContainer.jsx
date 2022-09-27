// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Actions.
import { setCarrito } from "../../actions/productos/setCarrito.js";

// Hooks.
import { useLocalStorage } from "../../hooks/useLocalStorage.jsx";

// Importación de componentes.
import CajaPage from "../../pages/caja/CajaPage.jsx";

// Definición del contenedor.
const CajaContainer = (props) => {
  // -- Manejo del estado.
  const { allProducts, setCarrito } = props;
  const [inventario, setInventario] = useLocalStorage("inventario", []);
  const [productos, setProductos] = useState([]);

  // -- Ciclo de vida.
  useEffect(() => {
    if (allProducts.length === 0) {
      setProductos(inventario);
    } else if (allProducts.length > inventario.length) {
      setProductos(allProducts);
    } else {
      setProductos(allProducts);
    }
  }, [allProducts]);

  // -- Metodos.
  const handleCarritoProducts = async (productosCarro) => {
    // Establecer los productos en el carro.
    await setCarrito(productosCarro)
      .then(() => {
        console.log("[🦆] Se configuraron los productos del carrito.");
      })
      .catch((error) => {
        console.log("[🥵] Error al configurar los productos del carrito.");
      });
  };

  // -- Renderizado.
  return <CajaPage productos={productos} sendCarrito={handleCarritoProducts} />;
};

// PropTypes.
CajaContainer.propTypes = {
  allProducts: PropTypes.array.isRequired,
  setCarrito: PropTypes.func.isRequired,
};

// Redux
const mapStateToProps = (state) => ({
  allProducts: state.product.allProducts ?? [],
});

const mapDispatchToProps = {
  setCarrito,
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(CajaContainer);

//? mapStateToProps: Consulta el estado de redux y lo mapea a los props del componente.
