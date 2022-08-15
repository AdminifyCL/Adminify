// Dependencias.
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp, firestore } from "../database/config.js";

/**
 * @name handleCreateUser
 * @description Inicio de sesión del usuario.
 * @param {object} data {email, password}
 * @returns {object}
 */
const handleUserSession = async (data) => {
  console.log("[#️⃣][INFO][handleUserSession]");

  const { email, contraseña: pass } = data;

  try {
    // Inicio de sesión del usuario.
    const auth = getAuth();
    const userData = await signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((err) => {
        console.log(`[❌][ERROR][signInWithEmailAndPassword] ${err.code} ${err.message}`);
        console.error(err);
      });

    return userData;
  } catch (err) {
    console.log(`[❌][ERROR][handleUserSession] Error al intentar iniciar sesión.`);
  }

  return {};
};

// Exportación.
export { handleUserSession };
