// Dependencias.
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp, firestore } from "../database/config.js";

/**
 *
 */
const handleGetAuth = async () => {
  console.log("[#️⃣][INFO][handleGetAuth]");

  const auth = getAuth();
  const isAuth = onAuthStateChanged(auth, (user) => {
    if (user) {
      return true;
    }

    return false;
  });

  return isAuth;
};

// Exportación.
export { handleGetAuth };
