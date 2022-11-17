// Dependencias.
import { doc, getDoc, collection, deleteDoc } from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import Collections from "../../firebase/config/collections.js";

// Definición...
const deleteProduct = async (productData, tiendaId) => {
  console.log("[] API HANDLER: deleteProduct");
  return new Promise(async (resolve, reject) => {
    try {
      // Información.
      console.log("[] Producto:", productData);
      console.log("[] Tienda:", tiendaId);

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
          console.error(error);
          reject({ error: true });
        });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default deleteProduct;
