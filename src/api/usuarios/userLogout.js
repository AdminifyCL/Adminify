// Dependencias.
import { getAuth, signOut } from "firebase/auth";
import { firebaseApp, firebaseAuth, firestore } from "../../database/config.js";

const userLogout = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const auth = getAuth();

      // Firebase auth
      await signOut(auth)
        .then(() => {
          console.log("[] Usuario deslogueado");
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });

      resolve();
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default userLogout;
