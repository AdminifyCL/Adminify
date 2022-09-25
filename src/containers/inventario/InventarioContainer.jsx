// Dependencias.
import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Actions.
import { createProduct } from "../../actions/productos/createProduct.js";
import { fetchProducts } from "../../actions/productos/fetchProducts.js";
import { fetchUserData } from "../../actions/user/fetchUserData.js";

// Importación de componentes.
import InventarioPage from "../../pages/inventario/InventarioPage.jsx";

// Definición del contenedor: <InventarioContainer />
const InventarioContainer = (props) => {
  // -- Manejo del estado.
  const { userAuth, fetchUserData, fetchProducts, allProducts } = props;
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // -- Ciclo de vida.
  useEffect(() => {
    console.log("[container] Mount");
    let isSubscribed = true;

    // Fetch de productos.
    const fetchStoreProducts = async () => {
      // Consulta a la información del usuario.
      let userId = userAuth.uid;
      const user = await fetchUserData(userId)
        .then((userData) => {
          console.log("[] Me traje la información del usuario.");
          return userData;
        })
        .catch((error) => console.error(error));

      // Consulta a la tienda.
      const storeId = user.tiendaId;
      console.log("[] Store id:", storeId);
      const products = await fetchProducts(storeId)
        .then(() => {
          console.log("[] Me traje los productos.");
        })
        .catch((error) => {
          console.error(error);
        });

      console.log("[] Productos", products);
      if (isSubscribed) {
        setProductos(products);
      }
    };

    fetchStoreProducts()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.error(err));

    // Garbage
    return () => (isSubscribed = false);
  }, []);

  // -- Metodos.
  const createProducto = () => {};

  // -- Renderizado.
  console.log("[] Productos: ", productos);
  return <InventarioPage products={productos} loading={loading} />;
};

// PropTypes.
InventarioContainer.propTypes = {};

// Redux
const mapStateToProps = (state) => ({
  userAuth: state.user.userAuth ?? {},
  allProducts: state.product.allProducts ?? [],
});

const mapDispatchToProps = {
  createProduct,
  fetchProducts,
  fetchUserData,
};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(InventarioContainer);
