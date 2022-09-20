// Dependencias.
import { setDoc, doc, collection, getDoc } from "firebase/firestore";

// Configuraciones.
import { firebaseApp, firestore } from "../../database/config.js";
import { actionUserTypes } from "../../types/actionUserTypes.js";
import collections from "../../types/database/collections.js";
import { onSuccess, onError } from "../response.js";
const { getUserData: TYPE } = actionUserTypes;

// Action: GET USER DATA.
const fetchUserData = (userId) => {
  console.log(`[🛂][ACTION][${TYPE}]`);

  return async (dispatch) => {
    try {
      // Base de datos.
      const userDoc = doc(firestore, collections.usuarios, userId);
      const userSnapshot = await getDoc(userDoc);

      const userData = userSnapshot.data();
      onSuccess(dispatch, TYPE, userData);
    } catch (err) {
      console.error(err);
      onError(dispatch, TYPE, err);
    }
  };
};

// Exportación.
export { fetchUserData };
