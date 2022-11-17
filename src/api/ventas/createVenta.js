// Dependencias.
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import { collection, doc, addDoc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import Collections from "../../firebase/config/collections.js";

// Definición...
const createVenta = async (tiendaId, ventaData) => {
  console.log("[] API HANDLER: createVenta");
  return new Promise(async (resolve, reject) => {
    try {
      const user = firebaseAuth.currentUser;

      if (user) {
        // Creación del documento en la BD.
        const ventasPath = `${Collections.tiendas}/${tiendaId}/${Collections.ventas}`;
        const ventasRef = collection(firestore, ventasPath);

        const ventaDoc = await addDoc(ventasRef, ventaData)
          .then((docRef) => {
            console.log("[ACTION] VENTA CREATED:", docRef);
            return docRef;
          })
          .catch((error) => {
            console.log("[] Error al crear la venta en la BD.");
            console.error(error);
            reject();
          });

        // Actualizar el documento de la BD.
        ventaData.id = ventaDoc.id;

        // Sumarle una hora a la fecha de creación.
        ventaData.fecha = serverTimestamp() + 3600000;

        await setDoc(ventaDoc, ventaData)
          .then(() => {
            console.log("[] Se actualizo la venta.");
          })
          .catch((error) => {
            console.log("[] Error al actualizar la venta en la BD.");
            console.error(error);
            reject();
          });

        const newVentaDoc = await getDoc(ventaDoc).then((doc) => {
          return doc.data();
        });

        resolve(newVentaDoc);
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
export default createVenta;
