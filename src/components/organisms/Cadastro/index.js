import React from 'react';
import GenericText from '../../atoms/GenericText/index.js'
import GenericTitle from '../../atoms/GenericTitle/index.js';
import Button from '../../atoms/Button/index.js';
import Input from '../../atoms/Input/index.js';
import NavInfo from '../../molecules/NavInfo/index.js';
import GenericLink from '../../atoms/GenericLink/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

export const Cadastro = (props) => {

    return (
        <div className='cadastro-content'>
          <NavInfo />  {/*Mudar para a nav correta*/}
          <div className='cadastro-text'>
            <div className='cadastro-title'>
              <GenericTitle size="large" color="white">Informe os campos abaixo para efetuar seu cadastro</GenericTitle>
            </div>
            <div className='cadstro-Input'>
              <div className='login-input'>
                <div className='nome-input'>
                  <Input>Nome</Input>
                </div><i class="fa fa-home"></i>
                <div className='nome-input'>
                  <Input>E-mail</Input>
                </div>
                <div className='nome-input'>
                  <Input>Senha</Input>
                </div>
                <div className='nome-input'>
                  <Input>Repita sua senha</Input>
                </div>
              </div>
              <div className='cadastro-regra-senha'>
                <GenericText size="large" color="gray">Sua senha deve atender aos seguintes critérios:</GenericText><br></br>
              </div>
              <div className='cadastro-regra-icon'>
                <GenericText size="large-menor" color="gray">No mínimo 6 caracteres</GenericText>
                <GenericText size="large-menor" color="gray">Letras minusculas, minusculas e números</GenericText>
              </div>
              <div className='cadastro-button'>
                <Button>Cadastrar</Button>
              </div>
            </div>
          </div>

          <div>
            {/* <GenreIcon />
            <GenreIcon />
            <GenreIcon /> */}
          </div>
            <div className='ja-possui-cadastro'>
              <GenericText>Já possui cadastro?</GenericText>
              <GenericLink color="white" size="medium" line>Clique aqui</GenericLink>
            </div>
        </div>
    );
}

export default Cadastro;
