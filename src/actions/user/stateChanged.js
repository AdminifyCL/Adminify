// Dependencias.
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Configuraciones.
import { firebaseApp, firestore } from "../../database/config.js";
import { actionUserTypes } from "../../types/actionUserTypes.js";
import { onSuccess, onError } from "../response.js";
const { onAuthState: TYPE } = actionUserTypes;

/**
 * @name onAuthStateChanged
 * @description Funcion que se ejecuta cuando el estado del usuario cambia.
 * @returns {void}
 */
const authStateChanged = () => {
  console.log(`[🛂][ACTION][${TYPE}]`);
  return async (dispatch) => {
    // Fetch.
    try {
      const auth = getAuth();

      // Identificar el estado de autenticación de la cuenta.
      onAuthStateChanged(auth, (user) => {
        if (user) {
          onSuccess(dispatch, TYPE, user);
        } else {
          onSuccess(dispatch, TYPE);
        }
      });
    } catch (err) {
      onError(dispatch, TYPE, err);
    }
  };
};

// Exportación.
export { authStateChanged };
