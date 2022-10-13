// Dependencias.
import React from "react";
import { Button } from "@mui/material";
import { FaCheck } from "react-icons/fa";

// Estilos.
import "./Licencia.scss";

// Definición del componente: <Licencia />
const Licencia = ({ titulo, actual, beneficios }) => {
  // Carga temporal de la lista de beneficios
  const listaBeneficios = beneficios.beneficios;

  // Renderizado.
  return (
    <div className={actual ? "CardLicencia_containerActive" : "CardLicencia_container"}>
      {/* Titulo */}
      <h1>{titulo}</h1>

      {/* Lista de beneficios */}
      <div className="CardLicencia_list">
        {listaBeneficios.map((data, index) => {
          return (
            <div className="CardLicencia_listItem" key={`item-${index}`}>
              <FaCheck className="CardLicencia_listItem-icon" />
              <p>{data}</p>
            </div>
          );
        })}
      </div>

      {/* Botón */}
      <div className="CardLicencia_button">
        <Button variant={actual ? "contained" : "outlined"} fullWidth={true}>
          {actual ? "Actual" : "Adquirir"}
        </Button>
      </div>
    </div>
  );
};

// Exportación.
export default Licencia;
