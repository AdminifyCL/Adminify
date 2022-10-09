// Definición de las alertas de prueba.
const successAlert = {
  type: "success",
  title: "Correcto!",
  message: "El registro se ha guardado correctamente",
};

const infoAlert = {
  type: "info",
  title: "Te informamos...",
  message: "Puedes cambiar tu contraseña en cualquier momento",
};

const warningAlert = {
  type: "warning",
  title: "Cuidado!",
  message: "No puedes eliminar este registro",
};

const errorAlert = {
  type: "danger",
  title: "Error!",
  message: "Ha ocurrido un error, por favor intenta de nuevo",
};

// Exportación.
export { successAlert, infoAlert, warningAlert, errorAlert };
