// Dependencias.
import { collection, doc, getDoc } from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import Collections from "../../firebase/config/collections.js";

// Definición...
const fetchVentas = async () => {
  console.log("[] API HANDLER: fetchVentas");
  return new Promise(async (resolve, reject) => {
    try {
      const user = firebaseAuth.currentUser;

      if (user) {
        // Consultar la información del usuario.
        const userId = user.uid;
        const userPath = `${Collections.usuarios}/${userId}`;
        const userDoc = doc(firestore, userPath);

        const userSnapshot = await getDoc(userDoc);
        const userData = userSnapshot.data();

        console.log({ userData });

        // Consultar las ventas de la tienda.
        const tiendaId = userData.tiendaId;
        const ventasPath = `${Collections.tiendas}/${tiendaId}/${Collections.ventas}`;
        const ventasRef = collection(firestore, ventasPath);

        console.log({ tiendaId });

        resolve();
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
export default fetchVentas;
