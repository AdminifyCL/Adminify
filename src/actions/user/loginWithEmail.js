// Dependencias.
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { updateDoc, doc, serverTimestamp } from "firebase/firestore";

// Configuraciones.
import { firebaseApp, firestore } from "../../database/config.js";
import collections from "../../types/database/collections.js";
import { actionUserTypes } from "../../types/actionUserTypes.js";
const { loginWithEmail } = actionUserTypes;

/**
 * @title Iniciar sesión con email y contraseña.
 * @description Inicio de sesión del usuario.
 * @param {object} data {email, password}
 * @returns {object} dispatch
 */
const loginUserWithEmail = (data) => {
  console.log(`[🛂][ACTION][${loginWithEmail}]`);
  return async (dispatch) => {
    // Eventos.
    const onSuccess = async (response) => {
      await dispatch({
        type: loginWithEmail,
        data: response,
      });
    };

    const onError = async (error) => {
      console.error(`[ERROR][ACTION][${loginWithEmail}]`);

      await dispatch({
        type: loginWithEmail,
        data: { error: { error: true, firebaseError: error } },
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
          onError(err);
        });

      // Actualizar los datos de la ultima conexión.
      const userDoc = doc(firestore, collections.usuarios, userData.uid);
      await updateDoc(userDoc, {
        lastLoginAt: serverTimestamp(),
      }).then(() => {
        console.log("[] Datos de la ultima conexión actualizados");
      });

      onSuccess(userData);
    } catch (err) {
      onError(err);
    }
  };
};

// Exportación.
export { loginUserWithEmail };
