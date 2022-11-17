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

    createProduct: (state, action) => {
      const new_producto = action.payload;
      let productos = state.productos;

      // Agregar el producto.
      let new_products = [...productos, new_producto];

      // Ordenar según categoria.
      new_products.sort((a, b) => {
        return a.categoria > b.categoria;
      });

      return { ...state, productos: new_products };
    },

    editProduct: (state, action) => {
      const new_producto = action.payload;
      let productos = state.productos;

      // Editar el producto.
      let new_products = productos.map((producto) => {
        if (producto.id === new_producto.id) {
          return new_producto;
        } else {
          return producto;
        }
      });

      // Ordenar según categoria.
      new_products.sort((a, b) => {
        return a.categoria > b.categoria;
      });

      return { ...state, productos: new_products };
    },

    deleteProduct: (state, action) => {
      const producto = action.payload;
      let productos = state.productos;

      let new_productos = productos.filter((p) => p.id !== producto.id);

      return { ...state, productos: new_productos };
    },

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
