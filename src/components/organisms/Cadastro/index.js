import React from 'react';
import GenericText from '../../atoms/GenericText/index.js'
import GenericTitle from '../../atoms/GenericTitle/index.js';
import Button from '../../atoms/Button/index.js';
import Input from '../../atoms/Input/index.js';
import NavInfo from '../../molecules/NavInfo/index.js';
import GenericLink from '../../atoms/GenericLink/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Check from '../../../../assets/check-gray.svg'
import CheckG from '../../../../assets/check-green.svg'
import CheckV from '../../../../assets/check-red.svg'
import MiniCheck from '../../atoms/MiniCheck'
import { loginUser } from '../../../store/userLogin.js'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Cadastro = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [senhaQuant, setsenhaQuant] = React.useState('gray')
  const [senhaCaracteres, setsenhaCaracteres] = React.useState('gray')
  const [repitSenhaCheck, setRepitSenhaCheck] = React.useState('gray')
  const [emailCheck, setEmailCheck] = React.useState('gray')

  const Enviar = () => {
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const repitsenha = document.getElementById("repit-senha").value
    var verificemail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    var caracteres = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{1,}$/
    var quantidade = /^(?=.*\d)[0-9a-zA-Z]{6,}$/
    if (nome !== '') {
      if (repitsenha == senha) {
        setRepitSenhaCheck('green')
        if (quantidade.test(senha)) {
          setsenhaQuant('green')
          if (caracteres.test(senha)) {
            setsenhaCaracteres('green')
            if (verificemail.test(email)) {
              setEmailCheck('green')
              axios.post(`http://localhost:3000/signup`, {
                name: nome,
                last_name: 'dsjfhdfs',
                email: email,
                password: senha
                /* email: 'moreto@email.com',
                password: '123456'  */
              })
                .then((res) => {
                  dispatch(loginUser(res))
                  navigate('/', { replace: true })
                })
                .catch((err) => {
                })
            }
          }

        }
      }
    }
    if (repitsenha !== senha) {
      setRepitSenhaCheck('red')
    }
    if (!quantidade.test(senha)) {
      setsenhaQuant('red')
    }
    if (!caracteres.test(senha)) {
      setsenhaCaracteres('red')
    }
    if (!verificemail.test(email)) {
      setEmailCheck('red')
    }
  }
  return (
    <div className='cadastro-content'>
      <NavInfo>Cadastro</NavInfo>
      <div className='cadastro-text'>
        <div className='cadastro-title'>
          <GenericText bold="bold" size="large" color="white">Informe os campos abaixo para efetuar seu cadastro</GenericText>
        </div>
        <div className='cadstro-Input'>
          <div className='cadastro-group-input'>
            <div className='nome-input'>
              <Input type="text" id="nome">Nome</Input>
            </div>
            <div className='nome-input'>
              <Input type='email' id="email">E-mail</Input>
            </div>
            <div className='nome-input'>
              <Input type="password" id="senha" >Senha</Input>
            </div>
            <div className='nome-input'>
              <Input type="password" id="repit-senha">Repita sua senha</Input>
            </div>
          </div>
          <div className='cadastro-regra-senha'>
            <GenericText size="large" color="gray">Atenda aos seguintes critérios</GenericText>
          </div>
          <div className='cadastro-regra-icon'>
            <div className='cadastro-criterio'>
              <div className='cadastro-mini-check-icon'>
                <MiniCheck size="small" color={emailCheck} />
              </div>
              <GenericText size="large-menor" color={emailCheck}>Email válido</GenericText>
            </div>
          </div>
          <div className='cadastro-regra-senha'>
            <GenericText size="large" color="gray">Senha:</GenericText>
          </div>
          <div className='cadastro-regra-icon'>
            <div className='cadastro-criterio'>
              <div className='cadastro-mini-check-icon'>
                <MiniCheck size="small" color={repitSenhaCheck} />
              </div>
              <GenericText size="large-menor" color={repitSenhaCheck}>As senhas devem ser iguais</GenericText>
            </div>
            <div className='cadastro-criterio'>
              <div className='cadastro-mini-check-icon'>
                <MiniCheck size="small" color={senhaQuant} />
              </div>
              <GenericText size="large-menor" color={senhaQuant}>No mínimo 6 caracteres</GenericText>
            </div>
            <div className='cadastro-criterio'>
              <div className='cadastro-mini-check-icon'>
                <MiniCheck size="small" color={senhaCaracteres} />
              </div>
              <GenericText size="large-menor" color={senhaCaracteres}>Letras minusculas, maiusculas e números</GenericText>
            </div>
          </div>
          <div className='cadastro-button' onClick={() => Enviar()}>
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
        <GenericLink color="white" size="medium" line href="/login">Clique aqui</GenericLink>
      </div>
    </div>
  );
}

export default Cadastro;
