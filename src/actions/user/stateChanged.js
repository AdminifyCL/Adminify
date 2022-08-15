// Dependencias.
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Configuraciones.
import { firebaseApp, firestore } from "../../database/config.js";
import { actionUserTypes } from "../../types/actionUserTypes.js";
const { onAuthState } = actionUserTypes;

/**
 * @name onAuthStateChanged
 * @description Funcion que se ejecuta cuando el estado del usuario cambia.
 * @returns {void}
 */
const authStateChanged = () => {
  console.log(`[INFO][ACTION][${onAuthState}]`);
  return async (dispatch) => {
    // Eventos.
    const onSuccess = (response) => {
      dispatch({
        type: onAuthState,
        data: response,
      });
    };

    const onError = (err) => {
      console.error(`[ERROR][ACTION][${onAuthState}]`);
      console.error(err);

      dispatch({
        type: onAuthState,
        data: {},
      });
    };

    // Fetch.
    try {
      const auth = getAuth();

      // Identificar el estado de autenticación de la cuenta.
      onAuthStateChanged(auth, (user) => {
        if (user) {
          onSuccess(user);
        } else {
          onSuccess({});
        }
      });
    } catch (err) {
      onError(err);
    }
  };
};

// Exportación.
export { authStateChanged };
