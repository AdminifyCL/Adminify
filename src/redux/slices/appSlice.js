// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import appState from "../state/appState.js";

// Adapters.
// ...

// Definición del reducer: userSlice.
const aplicationSlice = createSlice({
  name: "app",
  initialState: appState,

  // Reducers.
  reducers: {
    //* --
    displayAlert: (state, action) => {
      console.log("[] Display alert reducer");

      let alertData = action.payload;
      let alertVisible = true;

      return { ...state, alertData, alertVisible };
    },

    deleteAlert: (state, action) => {
      console.log("[] Delete alert reducer");

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
export const { displayAlert, deleteAlert } = aplicationSlice.actions;
export default aplicationSlice.reducer;
