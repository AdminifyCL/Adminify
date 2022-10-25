// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import empleadosState from "../states/empleadosState.js";

// Adapters.
// ...

// Definición del slice.
const empleadosSlice = createSlice({
  name: "empleados",
  initialState: empleadosState,

  // Reducers.
  reducers: {
    //* -- Control de los empleados.
    fetchEmpleados: (state, action) => {
      const payload = action.payload;
      let empleados = payload ?? [];

      return { ...state, empleados: empleados };
    },
  },
});

// Exportación.
export const { fetchEmpleados } = empleadosSlice.actions;
export default empleadosSlice.reducer;
