// Dependencias.
import { doc, collection, getDoc, getDocs } from "firebase/firestore";

// Configuraciones.
import { firebaseApp, firebaseAuth, firestore } from "../../database/config.js";
import collections from "../../types/database/collections.js";
import { actionProductTypes } from "../../types/actionProductTypes.js";
import { onSuccess, onError } from "../response.js";
const { getProducts: TYPE } = actionProductTypes;

const fetchProducts = () => {
  console.log(`[🛂][ACTION][${TYPE}]`);

  // Fetch
  return async (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        // Información del usuario.
        const userId = firebaseAuth.currentUser.uid;

        // Consultar la información del usuario.
        const userDoc = doc(firestore, collections.usuarios, userId);
        const userSnapshot = await getDoc(userDoc);
        const userData = userSnapshot.data();

        const tiendaId = userData.tiendaId;

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
        resolve(listaProductos);
      } catch (error) {
        onError(dispatch, TYPE, error);
        reject(error);
      }
    });
  };
};

// Exportación.
export { fetchProducts };
