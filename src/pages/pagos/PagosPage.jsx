// Dependencias.
import React from "react";
import TabNavigation from "../../components/TabNavigation/TabNavigation.jsx";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Checkbox,
  Autocomplete,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
// Estilos.
import "./PagosPage.scss";

// Definición del componente: <ConfirmacionPage />
const PagosPage = ({}) => {
  // -- Manejo del estado.
  const navigate = useNavigate();

  const label = { inputProps: { "aria-label": "Checkbox cliente" } };

  const [checked, setChecked] = React.useState(true);
  const [pago, setpago] = React.useState("");
  const [mostrarComponente, setMostrarComponente] = React.useState(true);

  const handleChangePago = (event) => {
    setpago(event.target.value);
  };

  const handleChange = () => {
    setChecked(event.target.checked);
    console.log("hola mundo");
  };
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

          <section className="pagosPage_ProductosContenedor">
            <section className="pagosPage_ProductosContenido">
              <div className="pagosPage_ProductosCabecera">
                <p>Resumen de productos</p>
              </div>
              <div className="pagosPage_ProductosLista">
                <div className="pagosPage_Cantidad">1</div>
                <div className="pagosPage_Producto">Completo italiano</div>
                <div className="pagosPage_Valor">$1900</div>
              </div>
            </section>
          </section>

          <section className="pagosPage_ProductosTotal">
            <p>Total:</p>
            <p className="pagosPage_totalValor">$1900</p>
          </section>

          <section className="pagosPage_TituloCliente">
            <p>
              ¿Desea agregar un cliente?{" "}
              <Checkbox
                onChange={() => setMostrarComponente(!mostrarComponente)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </p>
          </section>
          <div className={!mostrarComponente ? "show-elementPagos" : null}>
            {!mostrarComponente && (
              <div>
                {" "}
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
                        variant="filled"
                        margin="dense"
                      />
                      <TextField
                        id="inputCorreoCliente"
                        fullWidth
                        label="Correo"
                        variant="filled"
                        margin="dense"
                      />
                      <TextField
                        id="inputNumeroCliente"
                        fullWidth
                        label="Número telefónico"
                        variant="filled"
                        margin="dense"
                      />
                    </div>
                    <div className="pagosPage_ClienteBoton">
                      <Button
                        onClick={() => {
                          alert("Cliente guardado con éxito");
                        }}
                        variant="contained"
                      >
                        Guardar
                      </Button>
                    </div>
                  </section>
                </section>{" "}
              </div>
            )}
          </div>
          <section className="pagosPage_InfoCompraContenedor">
            <div className="pagosPage_InfoCompraTitulo">
              <p>Información de la compra</p>
            </div>
            <div className="pagosPage_ComboBox">
              <Box sx={{ minWidth: 500 }}>
                <FormControl variant="filled" fullWidth>
                  <InputLabel id="simple-select-labelPago">Método de Pago</InputLabel>
                  <Select
                    labelId="simple-select-labelPago"
                    id="simple-selectPago"
                    value={pago}
                    label="pago"
                    onChange={handleChangePago}
                  >
                    <MenuItem value={1}>Efectivo</MenuItem>
                    <MenuItem value={2}>Débito</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <section className="pagosPage_InfoCompraContenido">
              <div className="pagosPage_CancelarBoton">
                <Button onClick={() => navigate("/caja")} variant="outlined">
                  Cancelar compra
                </Button>
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
