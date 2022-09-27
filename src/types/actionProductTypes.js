// Definición de los actionsType de la pagina.
const actionProductTypes = {
  //* -- Control de los productos
  //? Crear un producto en la base de datos.
  createProduct: "CREATE_PRODUCT",

  //? Conseguir los productos de la base de datos.
  getProducts: "GET_PRODUCTS",

  //? Configurar los productos del carro de compra.
  setCarrito: "SET_CARRITO",

  //* -- Control de errores.
  cleanErrors: "CLEAN_ERRORS",
};

// Exportación de los actionsType.
export { actionProductTypes };
