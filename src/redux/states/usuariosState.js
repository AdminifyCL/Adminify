// Definición del estado inicial: Usuarios.
const usuariosState = {
  error: {
    status: false,
    message: "",
  },

  userAuth: {
    // Identificación del usuario.
    uid: "",
    email: "",
    username: "",

    // Token de usuario.
    tokens: {
      accessToken: "",
      refreshToken: "",
      exp: 0,
    },

    // Auth.
    isAuthenticated: false,
  },
  userData: {},
};

// Exportación
export default usuariosState;
