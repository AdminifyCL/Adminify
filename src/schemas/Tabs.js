// Dependencias.
import { publicURL, privateURL } from "./Navigation.js";

// Definición de las pestañas de la aplicación.
const TabList = [
  { id: "caja", name: "Caja", active: true, url: privateURL.caja },
  { id: "inventario", name: "Inventario", active: false, url: privateURL.inventario },
  { id: "empleados", name: "Empleados", active: false, url: privateURL.empleados },
  { id: "ventas", name: "Ventas", active: false, url: privateURL.ventas },
  { id: "estadisticas", name: "Estadísticas", active: false, url: privateURL.estadisticas },
  { id: "cuenta", name: "Mi cuenta", active: false, url: privateURL.cuenta },
];

// Exportación.
export default TabList;
