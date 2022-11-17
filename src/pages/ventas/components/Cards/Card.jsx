// Dependencias.
import React, { useState, useEffect, useId } from "react";
import { FaBox, FaClipboardList, FaCube, FaDollyFlatbed } from "react-icons/fa";
import { FaMinus, FaPlus, FaTrash, FaReceipt, FaIdBadge } from "react-icons/fa";
import { Badge, IconButton, Chip } from "@mui/material";
import Items from "../Items/Items.jsx";
import PropTypes from "prop-types";

// Estilos
import "./Card.scss";
import Style from "../../styles/Card/Style.jsx";

// Definición del componente: <Card />
const Card = (props) => {
  // 1. Manejo del estado.
  const { ventaInfo } = props;
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [open, setOpen] = useState(false);
  const id = useId();

  // 2. Ciclo de vida.
  useEffect(() => {
    handleFecha();
  }, []);

  // 3. Metodos.
  const handleFecha = () => {
    const fecha = new Date(ventaInfo.fecha.seconds * 1000 + 1000 * 60 * 60 * 1);
    const fechaString = fecha.toLocaleString();
    const fechaArray = fechaString.split(", ");
    setFecha(fechaArray[0]);
    setHora(fechaArray[1]);
  };

  // 4. Render.
  return (
    <div className="VentaCard-container">
      {/* Dialog */}
      <Items open={open} setOpen={setOpen} key={id} productos={ventaInfo.productos} />

      {/* Información */}
      <div className="VentaCard-infoContainer">
        {/* Identificador */}
        <div className="VentaCard-idContainer">
          <p className="VentaCard-idContent">{ventaInfo?.id}</p>
        </div>

        {/* Empleado */}
        <div className="VentaCard-empleadoInfo">
          <p>{ventaInfo?.vendedor.nombre ?? ""}</p>
        </div>

        {/* Fecha */}
        <div className="VentaCard-fechaInfo">
          <p>{fecha}</p>
        </div>

        {/* Metodo */}
        <div>
          <p>{ventaInfo?.metodo}</p>
        </div>

        {/* Totales */}
        <div className="VentaCard-totalContainer">
          <p className="VentaCard-totalContent">Total: ${ventaInfo?.total}</p>
        </div>
      </div>

      {/* Botones */}
      <div className="VentaCard-buttonContainer">
        <div className="VentaCard-chip">
          <Chip label={`${hora}`} variant="filled" />
        </div>

        <IconButton style={Style.iconButtonDisabled} size="medium" disabled>
          <FaTrash size={18} />
        </IconButton>

        <Badge badgeContent={ventaInfo?.cantidad ?? 0} color="primary">
          <IconButton style={Style.iconButton} size="medium" onClick={() => setOpen(true)}>
            <FaReceipt size={18} />
          </IconButton>
        </Badge>
      </div>
    </div>
  );
};

// PropTypes.
Card.propTypes = {};

// Exportación.
export default Card;
