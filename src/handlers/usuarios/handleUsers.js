// Dependencias.
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  updateCurrentUser,
} from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { firebaseApp, firestore } from "../database/config.js";

/**
 *
 * @param {object} data
 */
const handleCreateUser = async (data) => {
  console.log("[🛂][handleCreateUser] Creando usuario...");

  const { email, contraseña, nombre, apellido, licencia, cargo } = data;

  let newData = {
    email: email,
    nombre: nombre,
    apellido: apellido,
    licencia: licencia,
    cargo: cargo,
  };

  // PASO 1: Creación del usuario en Firebase Authentication.
  try {
    const auth = getAuth();
    const usuario = await createUserWithEmailAndPassword(auth, email, contraseña)
      .then((credencial) => {
        const user = credencial.user;

        //? Actualizar el nombre del usuario en Firebase Authentication.
        updateProfile(auth.currentUser, {
          displayName: `${nombre} ${apellido}`,
        })
          .then(() => {
            console.log("[🛂][updateProfile] Nombre actualizado en Firebase Authentication.");
          })
          .catch((err) => {
            console.log(`[❌][ERROR][updateProfile]${err.code} ${err.message}`);
            console.error(err);
          });

        return user;
      })
      .catch((err) => {
        console.log(`[❌][ERROR][createUserWithEmailAndPassword]${err.code} ${err.message}`);
        console.error(err);
      });

    newData.uid = usuario.uid;
  } catch (err) {
    console.log(
      "[❌][ERROR][handleCreateUser] Algo salio mal al crear el usuario en Firebase Authentication"
    );
    console.error(err);
  }

  // PASO 2: Creación del usuario en la Firestore.
  try {
    const usuarioDoc = doc(firestore, "USUARIOS", newData.uid);
    await setDoc(usuarioDoc, newData)
      .then(() => {
        console.log("[🛂][setDoc] Documento creado!");
      })
      .catch((err) => {
        console.log("[❌][ERROR][setDoc] Error al crear el documento.");
        console.error(err);
      });
  } catch (err) {
    console.log(`[❌][ERROR][doc] Algo salio mal al crear el documento en Firestore`);
    console.log(err);
  }

  return {};
};

// Exportación.
export { handleCreateUser };
