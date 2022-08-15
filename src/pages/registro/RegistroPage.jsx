// Dependencias.
import React, { Component } from "react";
import {Button, TextField, FormHelperText, InputLabel, InputAdornment,input} from '@mui/material'

import PropTypes from "prop-types";

// Importación de estilos.
import "./RegistroPage.scss";

// Definición de la pagina: Index.
class RegistroPage extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {};
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  // -- Métodos [MAPPING].

  // Renderizado.
  render() {
    return (

    <body>
      <section className="Titulo">
        <h1>Registro</h1>
      </section>
      <section className="Formulario">
        <TextField 
          fullWidth label="Nombre" 
          variant="outlined" 
          margin = "dense"
        /> 
        <TextField 
          fullWidth 
          label="Apellido" 
          variant="outlined" 
          margin = "dense"
        />
        <TextField 
          type={ "email" }
          fullWidth 
          label="Email" 
          variant="outlined" 
          margin = "dense"
        /> 
       
        <TextField 
          type={ "password" } 
          fullWidth 
          label="Contraseña" 
          variant="outlined" 
          margin = "dense"
        /> 
       
        <TextField 
          fullWidth label="Licencia" 
          variant="outlined" 
          margin = "dense"
        /> 
      </section>

      <div className="hiper">
        <a target = "_blank" 
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"> ¿No sabes cual es tu código de licencia?
        </a>
      </div>
      
      <div className="Boton">
        <Button variant="contained"
        onClick={() => {console.log("Hola")}}> Crea tu cuenta </Button>
      </div>
      
    </body>
    );
  }
}

// PropTypes.
RegistroPage.propTypes = {};

// Exportación de la pagina: Index.
export default RegistroPage;
