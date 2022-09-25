// Dependencias.
import React from "react";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Checkbox } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
// Estilos.
import "./PagosPage.scss";

// Definición del componente: <ConfirmacionPage />
const PagosPage = ({}) => {
  // -- Manejo del estado.
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  // -- Ciclo de vida.
  // -- Metodos.
  const handleRedirect = () => {
    // Redirigir a la confirmación del pago
    navigate("/confirmacion");
  };

  // -- Renderizado.
  return (
    <section>
      {/* Navegación */}
      <section className="">
        <TabNavigation />
      </section>

      {/* Visual */}
      <section className="pagosPage_Contenedor">
        <section className="pagosPage_Contenido">
          <div className="pagosPage_Titulo">
            <h1>Pago</h1>
          </div>
          <section className="pagosPage_TituloCliente">
            <p>
              ¿Desea agregar un cliente? <Checkbox {...label} defaultChecked />
            </p>
          </section>
          <section className="pagosPage_ProductosContenedor">
            <section className="pagosPage_ProductosContenido">
              <div className="pagosPage_ProductosCabecera">
                <p>Lista de productos</p>
              </div>
              <div className="pagosPage_ProductosLista">
                <p>...</p>
              </div>
            </section>
          </section>

          <section className="pagosPage_ProductosTotal">
            <p>Total:</p>
            <p className="pagosPage_totalValor">...</p>
          </section>

          <section className="pagosPage_Clientecontenedor">
            <section className="pagosPage_ClienteContenido">
              <div className="pagosPage_ClienteCabecera">
                <p> Nuevo cliente </p>
              </div>
              <div className="pagosPage_ClienteFormulario">
                <TextField
                  id="inputNombreCliente"
                  fullWidth
                  label="Nombre"
                  variant="outlined"
                  margin="dense"
                />
                <TextField
                  id="inputCorreoCliente"
                  fullWidth
                  label="Correo"
                  variant="outlined"
                  margin="dense"
                />
                <TextField
                  id="inputNumeroCliente"
                  fullWidth
                  label="Numero"
                  variant="outlined"
                  margin="dense"
                />
              </div>
              <div className="pagosPage_ClienteBoton">
                <Button variant="contained">guardar</Button>
              </div>
            </section>
          </section>

          <section className="pagosPage_InfoCompraContenedor">
            <div className="pagosPage_InfoCompraTitulo">
              <p>Información de la compra</p>
            </div>
            <div className="pagosPage_ComboBox">
              <p>combobox</p>
            </div>
            <section className="pagosPage_InfoCompraContenido">
              <div className="pagosPage_CancelarBoton">
                <Button variant="outlined">Cancelar compra</Button>
              </div>
              <Button onClick={() => handleRedirect()} variant="contained">
                Confirmar pago
              </Button>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

// Exportación.
export default PagosPage;
