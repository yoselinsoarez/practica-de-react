import React from 'react';
import '../hojas-de-estilo/Maravillas.css';

function Maravillas(props) {
  return (
    <div className= 'contenedor-maravillas'> 
      <img 
        className= 'imagen-maravillas'
        src={require(`../imagenes/${props.imagen}.png`)}
        alt= 'Foto de Chinese Wall'/>
        <div className= 'contenedor-texto-maravillas'>
          <p className= 'nombre-maravillas'><b>{props.nombre}</b> en {props.pais}</p>
          <p className= 'texto-maravillas'>"{props.texto}"</p>

        </div>

    </div>
  );
}

export default Maravillas