// Dependencias.
import React, { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Definición del componente: <Alerts />.
const AlertsContainer = ({ children, userError }) => {
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

const mapDispatchToProps = {};

// Exportación.
export default connect(mapStateToProps, mapDispatchToProps)(AlertsContainer);
