// Dependencias.
import { getAuth, signOut } from "firebase/auth";

// Configuraciones.
import { firebaseApp, firestore } from "../../database/config.js";
import { actionUserTypes } from "../../types/actionUserTypes.js";
const { logout } = actionUserTypes;

/**
 *
 * @returns
 */
const logoutUser = () => {
  console.log(`[INFO][ACTION][${logout}]`);
  return async (dispatch) => {
    // Eventos.
    const onSuccess = (response) => {
      dispatch({
        type: logout,
        data: response,
      });
    };

    const onError = (err) => {
      console.error(`[ERROR][ACTION][${logout}]`);
      console.error(err);

      dispatch({
        type: logout,
        data: {},
      });
    };

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

      onSuccess(userData);
    } catch (err) {
      onError(err);
    }
  };
};

// Exportación.
export { logoutUser };
