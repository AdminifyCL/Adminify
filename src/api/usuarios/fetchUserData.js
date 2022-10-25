// Dependencias.
import { doc, getDoc } from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import Collections from "../../firebase/config/collections.js";

// Definición...
const fetchUserData = async () => {
  console.log("[] API HANDLER: fetchUserData");
  return new Promise(async (resolve, reject) => {
    try {
      // Consulta a la base de datos.
      const user = firebaseAuth.currentUser;

      if (user) {
        const userId = user.uid;

        const userDoc = doc(firestore, Collections.usuarios, userId);
        const userSnapshot = await getDoc(userDoc);
        const userData = userSnapshot.data();

        const { isDev, tiendaId } = userData;

        let rutaQuery = "";
        if (isDev) {
          // Caso 1: Es desarrollador.
          rutaQuery = Collections.desarrolladores;
        } else {
          // Caso 2: No es desarrollador.
          rutaQuery = `${Collections.tiendas}/${tiendaId}/${Collections.empleados}`;
        }

        // Consultando la información del usuario.
        const dataDoc = doc(firestore, rutaQuery, userId);
        const dataSnapshot = await getDoc(dataDoc);
        const responseData = dataSnapshot.data();

        responseData ? resolve(responseData) : reject({});
      } else {
        reject();
      }
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default fetchUserData;
