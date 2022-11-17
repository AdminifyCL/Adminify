// Dependencias.
import { doc, getDoc, collection, deleteDoc } from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import Collections from "../../firebase/config/collections.js";

// Definición...
const deleteProduct = async (productData, tiendaId) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Documento en firebase.
      const PRODUCT_ID = productData.id.trim();
      const productPath = `${Collections.tiendas}/${tiendaId}/${Collections.productos}/`;
      const productCollection = collection(firestore, productPath);
      const productRef = doc(productCollection, PRODUCT_ID);

      // Mostrar datos.
      const docSnap = await getDoc(productRef);
      if (!docSnap.exists()) {
        reject({ error: true });
      }

      // Eliminar el producto.
      await deleteDoc(productRef)
        .then(() => {
          resolve({ error: false });
        })
        .catch((error) => {
          reject({ error: true });
        });
    } catch (error) {
      reject(error);
    }
  });
};

// Exportación.
export default deleteProduct;
