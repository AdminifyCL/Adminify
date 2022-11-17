// Dependencias.
import {} from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";

// Definición...
const createProduct = async (productData, tiendaId) => {
  console.log("[] API HANDLER: createProduct");
  return new Promise(async (resolve, reject) => {
    try {
      // Producto
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default createProduct;
