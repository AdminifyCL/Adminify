// Dependencias.
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconButton } from "@mui/material";
import ItemList from "./components/ItemList/ItemList.jsx";
import Logo from "../../assets/images/logo250x250.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types";

// Estilos.
import "./Navbar.scss";
import Styles from "./styles/Screen.jsx";

// Definición del componente: <Navbar />
const Navbar = (props) => {
  // 1. Menejo del estado.
  const { children } = props;
  const [visible, setVisible] = useState(false);

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  const handleItemVisibility = () => {
    setVisible(!visible);
  };

  // 4. Render.
  return (
    <div className="Navbar_container">
      {/* Header */}
      <div className="Navbar_headerContainer">
        {/* Header Logo */}
        <div className="Navbar_headerLogo">
          <LazyLoadImage
            src={Logo}
            width={30}
            height={30}
            alt="Adminify"
            effect="blur"
            style={Styles.icon}
          />
          <h1>Adminify</h1>
        </div>

        {/* Responsive items */}
        <div>
          <IconButton onClick={() => handleItemVisibility()}>
            <FaBars style={Styles.responsiveIcon} />
          </IconButton>
        </div>
      </div>

      {/* Body */}
      <div className="Navbar_bodyContainer">
        {/* Lista de items */}
        <ItemList visible={visible} />

        {/* Vista. */}
        {children}
      </div>
    </div>
  );
};

// Proptypes
Navbar.propTypes = {};

// Exportación.
export default Navbar;
