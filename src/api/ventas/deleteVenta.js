// Dependencias.
import { doc, getDoc, collection, deleteDoc } from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import Collections from "../../firebase/config/collections.js";

// Definición...
const deleteVenta = async (ventaData, tiendaId) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Documento en firebase.
      console.log("VENTA: ", ventaData);
      console.log("TIENDA: ", tiendaId);

      // Documento en firebase.
      const VENTA_ID = ventaData.id.trim();
      const ventasPath = `${Collections.tiendas}/${tiendaId}/${Collections.ventas}/`;
      const ventasCollection = collection(firestore, ventasPath);
      const ventaRef = doc(ventasCollection, VENTA_ID);

      // Mostrar datos.
      const docSnap = await getDoc(ventaRef);
      if (!docSnap.exists()) {
        reject({ error: true });
      }

      console.log("[FB] VENTA: ", docSnap.data());

      // Eliminar el producto.
      await deleteDoc(ventaRef)
        .then(() => {
          return resolve();
        })
        .catch((error) => {
          console.log(error);
          return reject();
        });

      // Fin.
      resolve();
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default deleteVenta;
