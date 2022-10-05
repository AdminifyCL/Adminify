// Dependencias.
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../database/config.js";
import collections from "../../types/database/collections.js";

const userLogin = async (formData) => {
  console.log("[] API HANDLER: userLogin");
  return new Promise(async (resolve, reject) => {
    try {
      const auth = getAuth();
      let USER_EMAIL = formData?.email ?? "";
      let USER_PASSWORD = formData?.password ?? "";

      // Iniciar sesión en Firebase.
      const userData = await signInWithEmailAndPassword(auth, USER_EMAIL, USER_PASSWORD)
        .then((userCredential) => {
          const user = userCredential.user;
          return user;
        })
        .catch((error) => {
          reject(error);
        });

      // Actualizar la información del usuario.
      if (userData) {
        const userDoc = doc(firestore, collections.usuarios, userData.uid);

        await updateDoc(userDoc, {
          lastLoginAt: serverTimestamp(),
        })
          .then(() => {
            console.log("[] Datos de la ultima conexión actualizados");
          })
          .catch((error) => {
            console.error(error);
          });
      }

      // Despachar los datos del usuario.
      resolve(userData);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default userLogin;
