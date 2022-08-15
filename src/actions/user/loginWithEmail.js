// Dependencias.
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Configuraciones.
import { firebaseApp, firestore } from "../../database/config.js";
import { actionUserTypes } from "../../types/actionUserTypes.js";
const { loginWithEmail } = actionUserTypes;

/**
 * @title Iniciar sesión con email y contraseña.
 * @description Inicio de sesión del usuario.
 * @param {object} data {email, password}
 * @returns {object} dispatch
 */
const loginUserWithEmail = (data) => {
  console.log(`[INFO][ACTION][${loginWithEmail}]`);
  return async (dispatch) => {
    // Eventos.
    const onSuccess = (response) => {
      dispatch({
        type: loginWithEmail,
        data: response,
      });
    };

    const onError = (err) => {
      console.error(`[ERROR][ACTION][${loginWithEmail}]`);
      console.error(err);

      dispatch({
        type: loginWithEmail,
        data: {},
      });
    };

    // Fetch.
    try {
      const auth = getAuth();
      let USER_EMAIL = data?.email;
      let USER_PASSWORD = data?.contraseña;

      // Iniciar sesión en Firebase.
      const userData = await signInWithEmailAndPassword(auth, USER_EMAIL, USER_PASSWORD)
        .then((userCredential) => {
          const user = userCredential.user;
          return user;
        })
        .catch((err) => {
          console.log(`[${err.code}] Error al iniciar sesión`);
          console.error(err);
          onError(err);
        });

      onSuccess(userData);
    } catch (err) {
      onError(err);
    }
  };
};

// Exportación.
export { loginUserWithEmail };
