// Definición del estado inicial.
const initialState = {
  // Información de la aplicación.
  appInfo: {
    appName: "payAdmin",
    appVersion: "Alpha",
    author: "payAdmin",
    appMode: "DEV",
  },

  // Información del usuario activo.
  user: {},

  // Información de la empresa.
  company: {
    name: "payAdmin",
    logo: "",
    slogan: "Una solución moderna a problemas anticuados",
    employees: ["Javier Almarza", "Gonzalo Cañas", "Vicente Salas", "Nicolás Cruz"],
  },

  // Información del sitio.
  site: {
    actualPage: "index",
    theme: "",
  },
};

// Exportación del estado inicial.
export default initialState;
