const handleFirebaseErrors = (firebaseError) => {
  const code = firebaseError.code;

  switch (code) {
    case "auth/user-not-found":
      return "El usuario no existe.";
      break;
    case "auth/invalid-email":
      return "El correo electrónico no es válido.";
      break;
    case "auth/wrong-password":
      return "Contraseña incorrecta.";
      break;

    default:
      return "Error desconocido";
      break;
  }
};

export default handleFirebaseErrors;
