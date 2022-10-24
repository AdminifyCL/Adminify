// Dependencias.
import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation.jsx";
import PropTypes from "prop-types";
import { publicURL, privateURL } from "../../schemas/Navigation.js";
import EmployeeModal from "../../components/Modals/Employees/EmployeeModal.jsx";
import {BsPersonFill} from "react-icons/bs";

// Estilos.
import "./EmpleadosPage.scss";
import { Button } from "@mui/material";

// Definición del componente: <EmpleadosPage />
const EmpleadosPage = (props) => {
  // 1. Manejo del estado.
  const {} = props;
  const empleados = [{"nombre":"Javier Almarza","correo":"javier@gmail.com","cargo":"Empleado"}] 
  const [modalVisibility,setModalVisibility] = useState(false)

  const handleVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.
  // 4. Render.
  return (
    <section className="empleadosPage_container">
      {/* Navegación de la aplicación. */}
      <section className="empleadosPage_navigation">
        <Navigation />
      </section>

      <EmployeeModal
        open={modalVisibility}
        onClose={() => handleVisibility()}
      />

      {/* Vista del empleado. */}
      <section className="empleadosPage_content">
        <div className="empleadosPage_Cabecera">
        <p>Administracion de empleados</p><Button variant="contained" onClick={handleVisibility}>Agregar empleados</Button>
        </div>
        <div className = "empleadosPage_Contenido">
        {empleados.map((employee)=>{
          return <div className="empleadosPage_Tarjeta"> 
          <div className="empleadosPage_icono">
          <BsPersonFill size={50}></BsPersonFill>
          </div>
            <div>
            <h2 >{employee.nombre}</h2>
            <h5 >{employee.correo}</h5>
            <p >{employee.cargo}</p>
            </div>
          </div>
        })}
        </div>
      </section>
    </section>
  );
};

// PropTypes.
EmpleadosPage.propTypes = {};

// Exportación.
export default EmpleadosPage;
