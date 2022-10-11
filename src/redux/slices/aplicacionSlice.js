// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import aplicacionState from "../states/aplicacionState.js";

// Adapters.
// ...

// Definición del slice.
const aplicacionSlice = createSlice({
  name: "aplicacion",
  initialState: aplicacionState,

  // Reducers.
  reducers: {
    //* -- Manejo de las alertas.
    displayAlert: (state, action) => {
      let alertData = action.payload;
      let alertVisible = true;

      return { ...state, alertData, alertVisible };
    },

    deleteAlert: (state, action) => {
      let alertData = {
        type: "",
        title: "",
        message: "",
      };

      let alertVisible = false;

      return { ...state, alertData, alertVisible };
    },
  },
});

// Exportación.
export const { displayAlert, deleteAlert } = aplicacionSlice.actions;
export default aplicacionSlice.reducer;
