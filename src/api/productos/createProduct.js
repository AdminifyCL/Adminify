// Dependencias.
import { collection, doc, setDoc } from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import Collections from "../../firebase/config/collections.js";

// Definición...
const createProduct = async (productData, tiendaId) => {
  console.log("[] API HANDLER: createProduct");
  return new Promise(async (resolve, reject) => {
    try {
      // Información.
      console.log("[] Producto:", productData);
      console.log("[] Tienda:", tiendaId);

      // Documento en firebase.
      const productPath = `${Collections.tiendas}/${tiendaId}/${Collections.productos}/`;
      const productCollection = collection(firestore, productPath);
      const productRef = doc(productCollection);
      console.log("[] Referencia:", productRef.id);

      // Crear el nuevo documento.
      const new_data = {
        ...productData,
        id: productRef.id,
      };

      await setDoc(productRef, new_data)
        .then(() => {
          console.log("[API] Documento creado");

          return resolve({ id: productRef.id });
        })
        .catch((error) => {
          console.error(error);
          console.log("[API] Error al crear el Documento");
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
