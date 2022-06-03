// Dependencias.
import React from "react";
import PropTypes from "prop-types";
import { FaConciergeBell } from "react-icons/fa";

// Importación de estilos.
import "./IndexPage.scss";
import IndexBg from "~assets/images/index-bg.jpg";

// Importación de componentes.
import Button from "~components/Button/Button.jsx";
import { Link } from "react-router-dom";

// Definición de la pagina: Index.
const IndexPage = (props) => {
  // Estado y props.
  const { info } = props;

  console.log(info);
  // Renderizado visual.
  return (
    <section className="index_container">
      <section className="index_content">
        {/* Titulo */}
        <div className="title_container">
          {/* Icono */}
          <FaConciergeBell className="title_container--icon" />

          {/* Titulo banner */}
          <div className="title_container--title">
            <h1>PAYADMIN</h1>
            <h2>Registro de cambios</h2>
          </div>

          {/* Version */}
          <div className="title_container--badge">
            <h3>v{info?.appVersion || "???"}</h3>
          </div>
        </div>

        {/* Contendor de las cartas. */}
        <div></div>

        <div className="banner_container"></div>
        <div
          className="banner_container"
          style={{
            backgroundImage: `url(${IndexBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="banner_container--btn">
            <Link to="login">
              <Button theme="light" btnText="Iniciar sesión" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

// PropTypes.
IndexPage.propTypes = {
  info: PropTypes.object,
};

// Exportación de la pagina: Index.
export default IndexPage;
