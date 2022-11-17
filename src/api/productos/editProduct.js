// Dependencias.
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import Collections from "../../firebase/config/collections.js";

// Definición...
const editProduct = async (productData, tiendaId) => {
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

      // Formatear los datos.
      let new_data = {
        ...productData,
      };

      new_data.valor = parseFloat(new_data.valor);
      new_data.unidades = parseInt(new_data.unidades);

      // Actalizar datos.
      await updateDoc(productRef, new_data)
        .then(() => {
          return resolve();
        })
        .catch((error) => {
          return reject();
        });
    } catch (error) {
      reject(error);
    }
  });
};

// Exportación.
export default editProduct;
