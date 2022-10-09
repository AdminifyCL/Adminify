// Dependencias.
import { PublicUrls, PrivateUrls } from "./Navigation.js";

// Definición de las pestañas de la aplicación.
const TabList = [
  { id: "caja", name: "Caja", active: true, url: PrivateUrls.caja },
  { id: "inventario", name: "Inventario", active: false, url: PrivateUrls.inventario },
  { id: "empleados", name: "Empleados", active: false, url: PrivateUrls.empleados },
  { id: "ventas", name: "Ventas", active: false, url: PrivateUrls.ventas },
  { id: "estadisticas", name: "Estadísticas", active: false, url: PrivateUrls.estadisticas },
  { id: "cuenta", name: "Mi cuenta", active: false, url: PrivateUrls.cuenta },
];

// Exportación.
export default TabList;
