// Dependencias.
import React, { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions.
import clearErrors from "../../actions/app/cleanErrors.js";

// Definición del componente: <Alerts />.
const AlertsContainer = ({ children, userError, clearErrors }) => {
  // -- Manejo del estado.
  const [visibility, setVisibility] = useState(false);

  // -- Ciclo de vida del componente.
  useEffect(() => {
    if (userError?.error) {
      setVisibility(true);
    }
  }, [userError]);

  // -- Metodos.
  const handleVisibility = () => {
    setVisibility(false);

    // Dispatch.
    clearErrors();
  };

  // -- Renderizado.
  return (
    <>
      <Snackbar
        open={visibility}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={() => handleVisibility()}
      >
        <Alert severity="error" variant="filled">
          {userError.message}
        </Alert>
      </Snackbar>
      {children}
    </>
  );
};

// Proptypes.

// Redux.
const mapStateToProps = (state) => ({
  userError: state.user.userError ?? {},
});

const mapDispatchToProps = {
  clearErrors,
};

// Exportación.
export default connect(mapStateToProps, mapDispatchToProps)(AlertsContainer);
