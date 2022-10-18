// Dependencias.
import { firebaseApp, firebaseAuth, firestore } from "../../database/config.js";
import { collection, doc, getDoc, addDoc } from "firebase/firestore";
import CollectionTypes from "../../types/database/collections.js";

// Configuraciones.
import { actionProductTypes } from "../../types/actionProductTypes.js";
import { onSuccess, onError } from "../response.js";
const { createProduct: TYPE } = actionProductTypes;

const createProduct = (data, listaProductosActual) => {
  console.log(`[🛂][ACTION][${TYPE}]`);

  // Fetch
  return async (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = firebaseAuth.currentUser;
        if (user) {
          const userId = user.uid;
          console.log("[] USERID:", userId);

          // Consultando la información del usuario.
          const userRef = doc(firestore, `${CollectionTypes.usuarios}/${userId}`);
          const userDoc = await getDoc(userRef);

          if (!userDoc.exists()) {
            reject("[] No pille al usuario!");
            onError(dispatch, TYPE, {});
          }

          const userData = userDoc.data();
          const { tiendaId } = userData;

          console.log("[] TIENDAID:", tiendaId);
          console.log("[] DATA:", data);

          const productPath = `${CollectionTypes.productos}/${tiendaId}/${CollectionTypes.producto}`;
          const productRef = collection(firestore, productPath);

          const productDoc = await addDoc(productRef, data)
            .then((response) => {
              console.log("[] Producto creado!");
              console.log("RESPOSE:", response);
              return response;
            })
            .catch((error) => console.error(error));

          data["id"] = productDoc.id;

          console.log("[] NEW DATA:", data);

          const response = {
            new_product: data,
            products: listaProductosActual,
          };

          // Dispatch.
          onSuccess(dispatch, TYPE, response);
          resolve();
          // TODO: Al resolver la promesa, falta desactivar temporalmente el botón de guardar producto con una propiedad de carga como loading.
        }
      } catch (error) {
        console.error(error);
        onError(dispatch, TYPE, error);
      }
    });
  };
};

// Exportación.
export { createProduct };
