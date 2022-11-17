// Dependencias.
import { collection, doc, setDoc } from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import Collections from "../../firebase/config/collections.js";

// Definición...
const createProduct = async (productData, tiendaId) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Documento en firebase.
      const productPath = `${Collections.tiendas}/${tiendaId}/${Collections.productos}/`;
      const productCollection = collection(firestore, productPath);
      const productRef = doc(productCollection);

      // Crear el nuevo documento.
      const new_data = {
        ...productData,
        id: productRef.id,
      };

      // Formatear los datos.
      new_data.valor = parseFloat(new_data.valor);
      new_data.unidades = parseInt(new_data.unidades);

      await setDoc(productRef, new_data)
        .then(() => {
          return resolve({ id: productRef.id });
        })
        .catch((error) => {
          return reject();
        });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default createProduct;
