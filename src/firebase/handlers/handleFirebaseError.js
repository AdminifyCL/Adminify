// Dependencias.

// Definición de la función.
const handleFirebaseError = (firebaseError) => {
  const code = firebaseError.code;
  console.log("[] ERROR CODE: ", code);

  if (code === "auth/invalid-email") {
    return "El correo electrónico no es válido";
  }

  return "Error desconocido";
};

// Exportación.
export default handleFirebaseError;
