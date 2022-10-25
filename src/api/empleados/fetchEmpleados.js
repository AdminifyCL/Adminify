// Dependencias.
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import Collections from "../../firebase/config/collections.js";

// Definición...
const fetchEmpleados = async () => {
  console.log("[] API HANDLER: fetchEmpleados");
  return new Promise(async (resolve, reject) => {
    try {
      const user = firebaseAuth.currentUser;

      if (user) {
        const userId = user.uid;

        // Consulta a la base de datos.
        const userDoc = doc(firestore, Collections.usuarios, userId);
        const userSnapshot = await getDoc(userDoc);
        const userData = userSnapshot.data();

        const { tiendaId } = userData;
        let listaEmpleados = [];

        // Consultar la lista de empleados.
        const empleadosPath = `${Collections.tiendas}/${tiendaId}/${Collections.empleados}`;
        const empleadosRef = collection(firestore, empleadosPath);

        const empleadosDocs = await getDocs(empleadosRef);

        empleadosDocs.forEach((documento) => {
          if (documento.exists()) {
            const empleado = documento.data();
            listaEmpleados.push(empleado);
          }
        });

        resolve(listaEmpleados);
      }
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default fetchEmpleados;
