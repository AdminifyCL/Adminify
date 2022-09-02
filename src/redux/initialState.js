// Definición del estado inicial.
const initialState = {
  // Información de la aplicación.
  app: {
    appName: "payAdmin",
    appVersion: "pre-alpha",
    author: "payAdmin",
    appMode: "PROD",
  },

  // Información del usuario activo.
  user: {
    isLogged: false,
    isAuth: false,
    userAuth: {
      isAuthenticated: false,
      email: "",
      emailVerified: false,
      uid: "",
    },
    userData: {},
  },

  // Información de la empresa.
  company: {
    name: "payAdmin",
    logo: "",
    slogan: "Una solución moderna a problemas anticuados",
    employees: ["Javier Almarza", "Gonzalo Cañas", "Nicolás Cruz", "Vicente Salas"],
  },

  // Información del sitio.
  page: {
    actualPage: "index",
    theme: "",
    isLoading: false,
  },
};

// Exportación del estado inicial.
export default initialState;
