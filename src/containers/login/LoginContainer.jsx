// Dependencias.
import * as React from "react";

// Importación de componentes.
import LoginPage from "~pages/login/LoginPage.jsx";

// Definición del contenedor.
const LoginContainer = (props) => {
  return (
    <div>
      <h1>Login - container</h1>
      <LoginPage />
    </div>
  );
};

// Exportación del contenedor.
export default LoginContainer;
