// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import productosState from "../states/productosState.js";

// Adapters.
// ...

// Definición del slice.
const productosSlice = createSlice({
  name: "productos",
  initialState: productosState,

  // Reducers.
  reducers: {
    // * -- Control de los productos.
    fetchProducts: (state, action) => {
      const payload = action.payload;
      let productos = payload ?? [];

      return { ...state, productos: productos };
    },

    createProduct: (state, action) => {},

    editProduct: (state, action) => {},

    deleteProduct: (state, action) => {},

    // * -- Control del carro de compra.
    setCarro: (state, action) => {
      const payload = action.payload;
      return { ...state, carrito: payload };
    },

    clearCarro: (state, action) => {
      return { ...state, carrito: [] };
    },
  },
});

// Exportación.
export const { fetchProducts, createProduct, editProduct, deleteProduct, setCarro, clearCarro } =
  productosSlice.actions;
export default productosSlice.reducer;
