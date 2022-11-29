// Dependencias.
import React, { useState, useEffect, useId , useRef} from "react";
import { useReactToPrint } from "react-to-print";
import { FaBox, FaClipboardList, FaCube, FaDollyFlatbed, FaPrint } from "react-icons/fa";
import { FaMinus, FaPlus, FaTrash, FaReceipt, FaIdBadge } from "react-icons/fa";
import { Badge, IconButton, Chip } from "@mui/material";
import Items from "../Items/Items.jsx";
import PropTypes from "prop-types";

// Estilos
import "./Card.scss";
import "./CardsContainer.scss"
import "../../VentasPage.scss"
import Style from "../../styles/Card/Style.jsx";
import CardBoleta from "./CardBoleta.jsx";

// Definición del componente: <Card />
const Card = (props) => {
  // 1. Manejo del estado.
  const { ventaInfo, definirDatos, referencia } = props;
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

  const handlePrint = useReactToPrint({
    content: () => referencia.current,
  });

  // 4. Render.
  return (
    <>
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

        {/*Eliminar*/}
        <IconButton style={Style.iconButtonDisabled} size="medium" disabled>
          <FaTrash size={18} />
        </IconButton>

        {/*Ver*/}
        <Badge badgeContent={ventaInfo?.cantidad ?? 0} color="primary">
          <IconButton style={Style.iconButton} size="medium" onClick={() => setOpen(true)}>
            <FaReceipt size={18} />
          </IconButton>
        </Badge>

        {/*Imprimir*/}
        <IconButton onClick={()=>{
          definirDatos({
            cajero:ventaInfo.vendedor.nombre,
            fecha: fecha,
            metodo: ventaInfo.metodo,
            total: ventaInfo.total,
            productos: [...ventaInfo.productos]
          })
          setTimeout(handlePrint,1500)
        }}>
          <FaPrint></FaPrint>
        </IconButton>

      </div>
    </div>
    </>
  );
};

// PropTypes.
Card.propTypes = {};

// Exportación.
export default Card;
