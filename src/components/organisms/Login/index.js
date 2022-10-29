import React from 'react';
import GenericText from '../../atoms/GenericText/index.js'
import './index.css'
import GenericTitle from '../../atoms/GenericTitle/index.js';
import NavInfo from '../../molecules/NavInfo/index.js';
import GenericLink from '../../atoms/GenericLink/index.js';
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../store/userLogin.js'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Login = (props) => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [ButtonActive, setActiveButton] = React.useState(true)
  const [MessageError, setMessageError] = React.useState('')
  const Email = () => {
    return document.getElementById("email").value
  }
  const Password = () => {
    return document.getElementById("senha").value
  }

  const Enviar = () => {
    console.log(document.getElementById("senha").value)
    axios.post(`http://localhost:3000/login`, {
      email: Email(),
      password: Password()
      /* email: 'moreto@email.com',
      password: '123456' */
    })
      .then((res) => {
        dispatch(loginUser(res))
        navigate('/', { replace: true })
      })
      .catch((err) => {
        if(err.code === 'ERR_NETWORK') {
          setMessageError('Estamos com problemas, volte mais tarde') 
        }
        else if (err.code === 'ERR_BAD_REQUEST') { 
          setMessageError('Email ou senha incorretos') 
        } 

      })
  }

  return (
    <div className='login-top'>
      <NavInfo>Login</NavInfo>
      <div className='login-content'>
        <div className='login-text'>
          <div className='login-title'>
            <GenericTitle type="h1" color="white">Olá!</GenericTitle>
          </div>
          <div className='login-subtitle'>
            <GenericText size="medium">É bom ter você aqui!</GenericText>
          </div>
          <div className='login-sub-subtitle'>
            <GenericText size="medium">Para entrar informe seus dados de login</GenericText>
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
              <GenericText size="medium">Ou acesse com:</GenericText>
              <div>
                {/* <GenreIcon />
            <GenreIcon />
            <GenreIcon /> */}
              </div>
              <div className='login-sem-cadastro'>
                <GenericText size="medium">Não possui cadastro?</GenericText>
                <GenericLink color="white" size="medium" line href="/cadastro">
                  <GenericText bold='bold'>
                    Clique aqui
                    </GenericText></GenericLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
