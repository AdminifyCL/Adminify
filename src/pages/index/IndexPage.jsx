// Dependencias.
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { FaCube } from "react-icons/fa";
import PropTypes from "prop-types";

// Actions.
// import { userLogin } from "../../redux/slices/userSlice.js";
// import ApiUserLogin from "../../api/usuarios/userLogin.js";

// Importación de estilos.
import "./IndexPage.scss";

// Definición de la pagina: <IndexPage />.
const IndexPage = ({}) => {
  // -- Manejo del estado.
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // -- Ciclo de vida.
  // -- Metodos.
  // const handleFunction = async () => {
  //   let formData = { email: "javier@gmail.com", password: "asd123" };
  //   const userData = await ApiUserLogin(formData)
  //     .then((response) => {
  //       console.log("[] Login exitoso.");
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.log("[] Algo salio mal.");
  //     });

  //   // Dispatch al slice de usuarios.
  //   dispatch(userLogin(userData));
  // };

  // -- Renderizado.
  return (
    <section className="indexPage_contenedor">
      <div className="indexPage_contenido">
        <div className="indexPage_titlecontent">
          <FaCube className="indexPage_titlecontent-icon" />
          <h1 className="indexPage_titlecontent-title">Adminify</h1>
        </div>

        <Button variant="contained" onClick={() => navigate("/login")}>
          Entrar
        </Button>
      </div>
    </section>
  );
};

// PropTypes.
IndexPage.propTypes = {};

// Exportación de la pagina: Index.
export default IndexPage;
