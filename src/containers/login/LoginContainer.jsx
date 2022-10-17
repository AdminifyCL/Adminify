// Dependencias.
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleFirebaseError from "../../firebase/handlers/handleFirebaseError.js";
import PropTypes from "prop-types";

// API Handler.
import userLoginWithEmail from "../../api/usuarios/userLogin.js";
import { userLogin } from "../../redux/slices/usuariosSlice.js";
import { displayAlert } from "../../redux/slices/aplicacionSlice.js";

// Componentes.
import LoginPage from "../../pages/login/LoginPage.jsx";

// Definiciones del contenedor.
const LoginContainer = (props) => {
  // Manejo del estado.
  const {} = props;
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.user.userAuth);

  // Ciclo de vida del componente.
  useEffect(() => {
    console.log("[>] userAuth::", userAuth);
    if (userAuth?.isAuthenticated) {
      setAuth(true);
    }

    return () => {};
  }, [userAuth]);

  // Metodos.
  const handleUserLogin = async (formData) => {
    setLoading(true);

    // API Handler
    const userData = await userLoginWithEmail(formData)
      .then((userData) => {
        let data = {
          error: false,
          data: userData,
        };
        return data;
      })
      .catch((error) => {
        console.log("[] Algo salio mal al iniciar la sesión");
        let data = {
          error: true,
          data: error,
        };
        return data;
      });

    // Redux Handler
    if (!userData.error) {
      dispatch(userLogin(userData));
    } else {
      // Handle Firebase Error.
      let errorMessage = handleFirebaseError(userData.data);
      let new_alert = {
        type: "error",
        title: "Error al iniciar sesión",
        message: errorMessage,
      };

      // Dispatch.
      dispatch(displayAlert(new_alert));
    }

    setLoading(false);
  };

  // Renderizado.
  return <LoginPage loading={loading} login={handleUserLogin} isAuth={auth} />;
};

// PropTypes.
LoginContainer.propTypes = {};

// Exportación del contenedor.
export default LoginContainer;
