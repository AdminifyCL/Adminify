// Dependencias.
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { publicURL, privateURL } from "../../../../schemas/Navigation.js";
import PropTypes from "prop-types";

// Actions.
import userSignOut from "../../../../api/usuarios/userLogout.js";
import { userLogout } from "../../../../redux/slices/usuariosSlice.js";

// Estilos.
import Styles from "./FooterList.styles.jsx";
import "./FooterList.scss";

// Definición del componente: <FooterList />
const FooterList = (props) => {
  // 1. Menejo del estado.
  const { userData } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleSignOut = async () => {
    await userSignOut()
      .then(() => {
        dispatch(userLogout({}));
        navigate(publicURL.index);
      })
      .catch((error) => {
        console.error("[] ERROR:", error);
      });
  };
  // 4. Render.
  return (
    <div className="FooterList_container">
      {/* User info */}
      <div className="FooterList_userContainer">
        <p>Bienvenido {userData.username}</p>
      </div>

      {/* Exit button*/}
      <div className="FooterList_exitContainer">
        <Button
          color="error"
          variant="contained"
          onClick={() => handleSignOut()}
          style={Styles.container}
        >
          <p style={Styles.textContainer}>
            <FaSignOutAlt style={Styles.icon} />
            Salir
          </p>
        </Button>
      </div>
    </div>
  );
};

// Proptypes
FooterList.propTypes = {};

// Exportación.
export default FooterList;
