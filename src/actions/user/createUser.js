// Dependencias.
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

// Configuraciones.
import { firebaseApp, firestore } from "../../database/config.js";
import { actionUserTypes } from "../../types/actionUserTypes.js";
const { createUser } = actionUserTypes;

const createUserWithEmail = (data) => {
  console.log(`[INFO][ACTION][${createUser}]`);

  return async (dispatch) => {
    // Eventos.
    const onSuccess = (response) => {
      console.log("[] SUCCESS response:", response);
      dispatch({
        type: createUser,
        data: response,
      });
    };

    const onError = (err) => {
      console.error(`[ERROR][ACTION][${createUser}]`);
      console.error(err);

      dispatch({
        type: createUser,
        data: {},
      });
    };

    // Fetch.
    try {
      console.log("DATOS ACTION: ");
      console.log(data);

      // Datos.
      const USER_EMAIL = data?.email ?? "";
      const USER_PASSWORD = data?.contraseña ?? "";
      const newData = {
        email: USER_EMAIL,
        nombre: data?.nombre ?? "",
        apellido: data?.apellido ?? "",
        licencia: data?.licencia ?? "",
        cargo: data?.cargo ?? "",
        uid: "",
        displayName: "",
        emailVerified: false,
        createdAt: 0,
        lastLoginAt: 0,
      };

      // Paso 1: Crear el usuario en Firebase AUTH.
      const auth = getAuth();
      const usuario = await createUserWithEmailAndPassword(auth, USER_EMAIL, USER_PASSWORD)
        .then(async (userCredential) => {
          const user = userCredential.user;
          console.log("[] USER CREDENTIAL");
          console.log({ user });

          // Actualizar el perfil del usuario.
          await updateProfile(auth.currentUser, {
            displayName: `${newData.nombre} ${newData.apellido}`,
          })
            .then(() => {
              console.log(
                "[#️⃣][INFO][updateProfile] Nombre actualizado en Firebase Authentication."
              );
            })
            .catch((err) => {
              console.log(`[❌][ERROR][updateProfile]${err.code} ${err.message}`);
              console.error(err);
            });

          // UID:
          newData.uid = user.uid;
          newData.displayName = user.displayName;
          newData.emailVerified = user.emailVerified;
          newData.createdAt = user.metadata.createdAt;
          newData.lastLoginAt = user.metadata.lastLoginAt;

          return user;
        })
        .catch((err) => {
          console.log(`[${err.code}] Error al crear al usuario`);
          onError(err);
        });

      // Paso 2: Crear el usuario en Firestore.
      const usuarioDoc = doc(firestore, "USUARIOS", newData.uid);
      await setDoc(usuarioDoc, newData)
        .then(() => {
          console.log("[#️⃣][INFO][setDoc] Documento creado!");
        })
        .catch((err) => {
          console.log("[❌][ERROR][setDoc] Error al crear el documento.");
          onError(err);
        });

      onSuccess(newData);
    } catch (err) {
      onError(err);
    }
  };
};

// Exportación.
export { createUserWithEmail };
