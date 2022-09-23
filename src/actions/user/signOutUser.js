// Dependencias.
import { getAuth, signOut } from "firebase/auth";

// Configuraciones.
import { firebaseApp, firestore } from "../../database/config.js";
import { actionUserTypes } from "../../types/actionUserTypes.js";
import { onSuccess, onError } from "../response.js";
const { logout: TYPE } = actionUserTypes;

/**
 *
 * @returns
 */
const logoutUser = () => {
  console.log(`[🛂][ACTION][${TYPE}]`);
  return async (dispatch) => {
    // Fetch.
    try {
      // Auth Firebase.
      const auth = getAuth();
      await signOut(auth)
        .then(() => {
          console.log("[] Usuario deslogueado");
        })
        .catch((err) => onError(err));

      // Reinicio de datos para el usuario.
      let userData = {
        isAuthenticated: false,
        email: "",
        emailVerified: false,
        uid: "",
      };

      onSuccess(dispatch, TYPE, userData);
    } catch (err) {
      onError(dispatch, TYPE, err);
    }
  };
};

// Exportación.
export { logoutUser };
