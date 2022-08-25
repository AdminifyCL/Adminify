const handleFirebaseErrors = (firebaseError) => {
  const code = firebaseError.code;

  switch (code) {
    case "auth/user-not-found":
      return "El usuario no existe.";
    case "auth/invalid-email":
      return "El correo electrónico no es válido.";
    case "auth/wrong-password":
      return "Contraseña incorrecta.";

    default:
      return "Error desconocido";
  }
};

export default handleFirebaseErrors;
