// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

// Actions: API Handler
import userLoginWithEmail from "../../api/usuarios/userLogin.js";
import { userLogin } from "../../redux/slices/userSlice.js";

// Importación de componentes.
import LoginPage from "../../pages/login/LoginPage.jsx";

// Definición del contenedor: <LoginContainer />
const LoginContainer = (props) => {
  // Manejo del estado.
  const {} = props;
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.user.userAuth);

  // Ciclo de vida del componente.
  useEffect(() => {}, []);

  // Metodos.
  const handleUserLogin = async (formData) => {
    setLoading(true);

    // API Handler
    const userData = await userLoginWithEmail(formData)
      .then((userData) => {
        return userData;
      })
      .catch((error) => {
        console.log("[] Algo salio mal al iniciar la sesión");
      });

    // Redux Handler
    dispatch(userLogin(userData));
    setLoading(false);
  };

  // Renderizado.
  return <LoginPage loading={loading} login={handleUserLogin} isAuth={auth} />;
};

// PropTypes.
LoginContainer.propTypes = {};

// Exportación del contenedor.
export default LoginContainer;
