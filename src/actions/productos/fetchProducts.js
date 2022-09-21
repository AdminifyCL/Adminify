// Dependencias.
import { setDoc, doc, collection, getDoc, getDocs, query, where } from "firebase/firestore";

// Configuraciones.
import { firebaseApp, firestore } from "../../database/config.js";
import collections from "../../types/database/collections.js";
import { actionProductTypes } from "../../types/actionProductTypes.js";
import { onSuccess, onError } from "../response.js";
const { getProducts: TYPE } = actionProductTypes;

const fetchProducts = (tiendaId) => {
  console.log(`[🛂][ACTION][${TYPE}]`);

  // Fetch
  return async (dispatch) => {
    try {
      let listaProductos = [];

      // Consulta a la base de datos.
      const productoPath = `${collections.productos}/${tiendaId}/${collections.producto}`;
      const productoRef = collection(firestore, productoPath);

      const productoDocs = await getDocs(productoRef);
      productoDocs.forEach((documento) => {
        if (documento.exists()) {
          const producto = documento.data();
          listaProductos.push(producto);
        }
      });

      onSuccess(dispatch, TYPE, listaProductos);
    } catch (error) {
      onError(dispatch, TYPE, error);
    }
  };
};

// Exportación.
export { fetchProducts };
