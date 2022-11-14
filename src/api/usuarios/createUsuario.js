// Dependencias.
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/index.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, setDoc, doc, serverTimestamp } from "firebase/firestore";
import Collections from "../../firebase/config/collections.js";

// Definición...
const createUsuario = async (data) => {
  console.log("[] API HANDLER: createUsuario");
  return new Promise(async (resolve, reject) => {
    try {
      const { email, password, nombre, apellido } = data ?? {};
      const auth = getAuth();
      const userData = await createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;

          // Actualizando el perfil del usuario.
          await updateProfile(user, {
            displayName: `${nombre} ${apellido}`,
          });

          return user;
        })
        .catch((error) => {
          console.log("[] ERROR: ", error);
          reject();
        });

      // Crear un documento en el nodo de USUARIOS.
      console.log("[] USER DATA:", userData);
      let newData = {
        isDev: false,
        tiendaId: "6Naf9vEr6z11pPEdsGW9",
        uid: userData.uid,
      };

      const usuariosRef = collection(firestore, Collections.usuarios);
      const USUARIO_ID = userData.uid;
      const userDoc = doc(usuariosRef, USUARIO_ID);

      const docRef = await setDoc(userDoc, newData)
        .then(() => {
          console.log("[] Se creo el documento de usuario!");
        })
        .catch((err) => {
          console.log("[] ERROR: ", err);
        });

      // Crear el documento en el nodo de TIENDAS.
      const empleadoData = {
        nombre: nombre,
        apellido: apellido,
        cargo: "Empleado",
        createdAt: serverTimestamp(),
        displayName: `${nombre} ${apellido}`,
        email: email,
        emailVerified: userData.emailVerified,
        licencia: "test",
        tiendaId: "6Naf9vEr6z11pPEdsGW9",
        uid: userData.uid,
      };

      const empleadosPath = `${Collections.tiendas}/6Naf9vEr6z11pPEdsGW9/${Collections.empleados}`;
      const tiendasRef = collection(firestore, empleadosPath);
      const empleadoDoc = doc(tiendasRef, USUARIO_ID);

      const empleadoRef = await setDoc(empleadoDoc, empleadoData)
        .then(() => {
          console.log("[] Se creo el documento de empleado!");
        })
        .catch((err) => {
          console.log("[] ERROR: ", err);
        });

      resolve();
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default createUsuario;
