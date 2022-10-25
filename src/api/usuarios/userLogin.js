// Dependencias.
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import Collections from "../../firebase/config/collections.js";

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
        const userDoc = doc(firestore, Collections.usuarios, userData.uid);
        const userSnapshot = await getDoc(userDoc);
        const responseUser = userSnapshot.data();

        const { isDev, tiendaId, uid } = responseUser;

        let rutaQuery = "";
        if (isDev) {
          // Caso 1: El usuario es desarrollador.
          rutaQuery = Collections.desarrolladores;
        } else {
          // Caso 2: No es desarrollador.
          rutaQuery = `${Collections.tiendas}/${tiendaId}/${Collections.empleados}`;
        }

        // Consultamo la información del usuario.
        const usuarioDoc = doc(firestore, rutaQuery, uid);

        await updateDoc(usuarioDoc, {
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
