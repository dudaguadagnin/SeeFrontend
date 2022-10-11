import React from 'react';
import GenericText from '../../atoms/GenericText/index.js'
import GenericTitle from '../../atoms/GenericTitle/index.js';
import Button from '../../atoms/Button/index.js';
import Input from '../../atoms/Input/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

export const Cadastro = (props) => {

    return (
        <div className='cadastro-content'>

          <div className='cadastro-text'>
            <div className='cadastro-title'>
              <GenericText size="large" color="white">Informe os campos abaixo para efetuar seu cadastro</GenericText>
            </div>
            <div className='cadstro-Input'>
              <div className='login-input'>
                <div className='nome-input'>
                  <Input>Nome</Input>
                </div>
                <div className='nome-input'>
                  <Input>E-mail</Input>
                </div>
                <div className='nome-input'>
                  <Input>Senha</Input>
                </div>
              </div>
              <GenericText size="large" color="gray">Sua senha deve atender os seguintes critérios:</GenericText><br></br>
              <GenericText size="large" color="gray">No mínimo 6 caracteres</GenericText>
              <GenericText size="large" color="gray">Letras minusculas, minusculas e números</GenericText>
              <Button>Cadastrar</Button>
            </div>
          </div>

          <div>
            {/* <GenreIcon />
            <GenreIcon />
            <GenreIcon /> */}
          </div>
            <div className='ja-possui-cadastro'>
              <GenericText>Já possui cadastro?</GenericText>
              <GenericText>Clique aqui</GenericText>
            </div>
        </div>
    );
}

export default Cadastro;
