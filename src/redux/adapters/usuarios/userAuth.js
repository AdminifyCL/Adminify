const adapter = (formData) => {
  // Desestructuración.
  const { data } = formData;
  const userId = data.uid ?? data.id ?? "";
  const userEmail = data.email ?? "";
  const displayName = data.displayName ?? "";
  const accessToken = data.stsTokenManager?.accessToken ?? "";
  const refreshToken = data.stsTokenManager?.refreshToken ?? "";
  const expiration = data.stsTokenManager?.expirationTime ?? "";

  const isAuthenticated = userId !== "" ? true : false;

  // Modelo de datos.
  let userAuth = {
    // Identificación del usuario.
    uid: userId,
    email: userEmail,
    username: displayName,

    // Token de usuario.
    tokens: {
      accessToken: accessToken,
      refreshToken: refreshToken,
      exp: expiration,
    },

    // Auth.
    isAuthenticated,
  };

  return userAuth;
};

// Exportación.
export default adapter;
