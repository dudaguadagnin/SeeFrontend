import React from 'react';
import GenericText from '../../atoms/GenericText/index.js'
import './index.css'
import Input from '../../atoms/Input/index.js'
import GenericTitle from '../../atoms/GenericTitle/index.js';
import NavInfo from '../../molecules/NavInfo/index.js';
import Button from '../../atoms/Button/index.js';
import GenericLink from '../../atoms/GenericLink/index.js';
import axios from 'axios';

export const Login = (props) => {
  const [ButtonActive, setButtonActive] = React.useState(false)
  const Enviar = () => {
      axios.post(`http://localhost:3000/login`, {
        email: 'moreto@email.com',
        password: '123456'
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='login-top'>
      <NavInfo />
      <div className='login-content'>
        <div className='login-text'>
          <div className='login-title'>
            <GenericTitle type="h1" color="white">Olá!</GenericTitle>
          </div>
          <div className='login-subtitle'>
            <GenericText>É bom ter você aqui!</GenericText>
          </div>
          <div className='login-sub-subtitle'>
            <GenericText>Para entrar informe seus dados de login</GenericText>
          </div>
        </div>
        <div className='login-content-input'>
          <div className='login-input'>
            <Input type="email">Email</Input>
          </div>
          <div className='login-input'>
            <Input type="password">Senha</Input>
          </div>
        </div>
        <div className='login-content-button' onClick={() => Enviar()}>
          <div className='login-button'>
          <Button ative >Entrar</Button>
          </div>
          <div>
            <div className='login-cadastre-se'>
              <GenericText>Ou acesse com:</GenericText>
              <div>
                {/* <GenreIcon />
            <GenreIcon />
            <GenreIcon /> */}
              </div>
              <div className='login-sem-cadastro'>
                <GenericText>Não possui cadastro?</GenericText>
                <GenericLink color="white" size="medium" line>Clique aqui</GenericLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
