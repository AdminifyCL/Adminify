// Dependencias.
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import Collections from "../../firebase/config/collections.js";

// Definición...
const fetchProducts = async () => {
  console.log("[] API HANDLER: fetchProducts");
  return new Promise(async (resolve, reject) => {
    try {
      const user = firebaseAuth.currentUser;

      if (user) {
        const userId = user.uid;

        // Consulta a la base de datos.
        const userDoc = doc(firestore, Collections.usuarios, userId);
        const userSnapshot = await getDoc(userDoc);
        const userData = userSnapshot.data();

        const tiendaId = userData.tiendaId;
        let listaProductos = [];

        const productoPath = `${Collections.tiendas}/${tiendaId}/${Collections.productos}`;
        const productoRef = collection(firestore, productoPath);

        const productoDocs = await getDocs(productoRef);
        productoDocs.forEach((documento) => {
          if (documento.exists()) {
            const producto = documento.data();
            listaProductos.push(producto);
          }
        });

        // Ordenar los productos mediante su categoria.
        listaProductos.sort((a, b) => {
          if (a.categoria > b.categoria) {
            return 1;
          }
          if (a.categoria < b.categoria) {
            return -1;
          }
          return 0;
        });

        resolve(listaProductos);
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
export default fetchProducts;
