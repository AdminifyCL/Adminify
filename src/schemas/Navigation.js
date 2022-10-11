// Definición de las rutas publicas y privadas.
const publicURL = {
  index: "/",

  login: "/login",
  registro: "/registro",
  recuperar: "/recuperar",
  notFound: "*",
};

const privateURL = {
  cargando: "/cargando",

  caja: "/caja",
  pago: "/pago",
  confirmacion: "/confirmacion",
  empleados: "/empleados",
  inventario: "/inventario",
  ventas: "/ventas",
  estadisticas: "/estadisticas",
  cuenta: "/cuenta",
};

// Exportación.
export { publicURL, privateURL };
