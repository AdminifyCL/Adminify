// Definición de los actionsType de la pagina.
const actionProductTypes = {
  //* -- Control de los productos
  //? Crear un producto en la base de datos.
  createProduct: "CREATE_PRODUCT",

  //? Conseguir los productos de la base de datos.
  getProducts: "GET_PRODUCTS",

  //? Configurar los productos del carro de compra.
  setCarrito: "SET_CARRITO",

  //? Editar la información de un producto.
  editProduct: "EDIT_PRODUCT",

  //? Eliminar un producto.
  deleteProduct: "DELETE_PRODUCT",

  //* -- Control de errores.
  cleanErrors: "CLEAN_ERRORS",
};

// Exportación de los actionsType.
export { actionProductTypes };
