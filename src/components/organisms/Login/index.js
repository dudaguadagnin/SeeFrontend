import React from 'react';
import GenericText from '../../atoms/GenericText/index.js'
import './index.css'
import Input from '../../atoms/Input/index.js'
import GenericTitle from '../../atoms/GenericTitle/index.js';
import NavInfo from '../../molecules/NavInfo/index.js';
import Button from '../../atoms/Button/index.js';
import GenericLink from '../../atoms/GenericLink/index.js';
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../../store/userLogin.js'
import axios from 'axios';

export const Login = (props) => {

  const dispatch = useDispatch()
  const [ButtonActive, setActiveButton] = React.useState(true)
  const [MessageError, setMessageError] = React.useState('')

  const Email = () => {
    console.log('e', document.getElementById("email").value)
    return document.getElementById("email").value
  }
  const Password = () => {
    console.log('p', document.getElementById("senha").value)
    return document.getElementById("senha").value
  }

  
  /*
  console.log(document.getElementById("senha")) if ((document.getElementById("senha").value && document.getElementById("email").value) !== '') {
    setActiveButton(true)
  }
  else {
    setActiveButton(false)
  }
 */



  const Enviar = () => {
    console.log(document.getElementById("senha").value)
    axios.post(`http://localhost:3000/login`, {
      email: Email(),
      password: Password()
      /* email: 'moreto@email.com',
      password: '123456' */
    })
      .then((res) => {
        console.log(res)
        dispatch(loginUser(res))
      })
      .catch((err) => {
        if (err.response.data.error === 'Email or password invalid, try again') { setMessageError('Email ou senha incorretos') }
        else { setMessageError('Estamos com problemas, volte mais tarde') }
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
            <input id="email" className='l-input' type="email" placeholder="Email" />
          </div>
          <div className='login-input'>
            <input id="senha" className="l-input" type="password" placeholder="Senha" />
          </div>
        </div>
        {
          MessageError 
          ? <span className='login-message-error'>{MessageError}</span>
          : ''
        }
        <div className='login-content-button'>
          {
            ButtonActive
              ?
              <div onClick={() => Enviar()} className='login-button login-button-large button-active'>
                Entrar
              </div>
              :
              <div className='login-button login-button-large button-disabled'>
                Entrar
              </div>
          }
          

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
