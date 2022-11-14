// Dependencias.
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Definición...
const createUsuario = async (data) => {
  console.log("[] API HANDLER: createUsuario");
  return new Promise(async (resolve, reject) => {
    try {
      const { email, password } = data ?? {};

      const auth = getAuth();
      // await createUserWithEmailAndPassword(auth, email, password)
      //   .then((userCredential) => {
      //     const user = userCredential.user;

      //     resolve();
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;

      //     console.log("[] ERROR: ", errorCode, errorMessage);
      //     reject();
      //   });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default createUsuario;
