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

        userData ? resolve(userData) : reject({});
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
