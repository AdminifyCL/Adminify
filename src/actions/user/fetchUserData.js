// Dependencias.
import { setDoc, doc, collection, getDoc } from "firebase/firestore";

// Configuraciones.
import { firebaseApp, firebaseAuth, firestore } from "../../database/config.js";
import { actionUserTypes } from "../../types/actionUserTypes.js";
import collections from "../../types/database/collections.js";
import { onSuccess, onError } from "../response.js";
const { getUserData: TYPE } = actionUserTypes;

// Action: GET USER DATA.
const fetchUserData = () => {
  console.log(`[🛂][ACTION][${TYPE}]`);

  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        // Base de datos.
        const userId = firebaseAuth.currentUser.uid;

        const userDoc = doc(firestore, collections.usuarios, userId);
        const userSnapshot = await getDoc(userDoc);
        const userData = userSnapshot.data();

        if (userData) {
          onSuccess(dispatch, TYPE, userData);
          resolve(userData);
        }
      } catch (err) {
        console.error(err);
        onError(dispatch, TYPE, err);
        reject(err);
      }
    });
  };
};

// Exportación.
export { fetchUserData };
