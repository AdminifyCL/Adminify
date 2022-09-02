// Dependencias.
import { setDoc, doc, collection, getDoc } from "firebase/firestore";

// Configuraciones.
import { firebaseApp, firestore } from "../../database/config.js";
import { actionUserTypes } from "../../types/actionUserTypes.js";
import collections from "../../types/database/collections.js";
const { getUserData } = actionUserTypes;

// Eventos.
const onSuccess = (dispatch, data) => {
  dispatch({
    type: getUserData,
    error: false,
    success: true,
    data: data,
  });
};
const onError = (dispatch, error) => {
  dispatch({
    type: getUserData,
    error: true,
    success: false,
    data: error,
  });
};

// Action: GET USER DATA.
const fetchUserData = (userId) => {
  console.log(`[🛂][ACTION][${getUserData}]`);

  return async (dispatch) => {
    try {
      // Base de datos.
      const userDoc = doc(firestore, collections.usuarios, userId);
      const userSnapshot = await getDoc(userDoc);

      const userData = userSnapshot.data();
      onSuccess(dispatch, userData);
    } catch (err) {
      console.error(err);
      onError(dispatch, err);
    }
  };
};

// Exportación.
export { fetchUserData };
