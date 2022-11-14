// Dependencias.
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";

// Definición...
const recoverAccount = async (email) => {
  console.log("[] API HANDLER: recoverAccount");
  return new Promise(async (resolve, reject) => {
    try {
      console.log("[] EMAIL:", email);

      const auth = getAuth();
      await sendPasswordResetEmail(auth, email)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          console.log("[] ERROR:", error);
          reject(error);
        });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default recoverAccount;
