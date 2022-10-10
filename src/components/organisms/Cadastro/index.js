import React from 'react';
import GenericText from '../../atoms/GenericText/index.js'
import './index.css'

export const Cadastro = (props) => {

    return (
        <div className='cadastro-content'>
          <GenericText>Informe os campos abaixo para efetuar seu cadastro</GenericText>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <GenericText>Sua senha deve atender os seguintes critérios</GenericText>
          <GenericText>No mínimo 6 caracteres</GenericText>
          <GenericText>Letras minusculas, minusculas e números</GenericText>
          <button>Cadastrar</button>
          <div>
            {/* <GenreIcon />
            <GenreIcon />
            <GenreIcon /> */}
          </div>
          <GenericText>Não possui cadastro?</GenericText>
          <a>Clique aqui</a>
        </div>
    );
}

export default Cadastro;
