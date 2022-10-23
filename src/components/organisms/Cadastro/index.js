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

export const Cadastro = (props) => {
  const [senhaQuant, setsenhaQuant] = React.useState('gray')
  const [senhaCaracteres, setsenhaCaracteres] = React.useState('gray')
  const [repitSenhaCheck, setRepitSenhaCheck] = React.useState('gray')
  const [emailCheck, setEmailCheck] = React.useState('gray')

  const Email = (email) => {
    var verificemail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    if (verificemail.test(email)) {
      setEmailCheck('green')
      return verificemail.test(email)
    } else {
      setEmailCheck('red')
      return verificemail.test(email)
    }
  }
  const Password = (senha) => {
    var caracteres = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{1,}$/
    var quantidade = /^(?=.*\d)[0-9a-zA-Z]{6,}$/
    if (quantidade.test(senha)) {
      setsenhaQuant('green')
    }
    if (!quantidade.test(senha)) {
      setsenhaQuant('red')
    }
    if (caracteres.test(senha)) {
      setsenhaCaracteres('green')
    }
    if (!caracteres.test(senha)) {
      setsenhaCaracteres('red')
    }
  }
  const VerificCredentiais = (nome, email, senha, repitsenha) => {


    if (nome !== '') {
      Email(email)
      if (repitsenha !== senha) {
        setRepitSenhaCheck('red')
      } else {
        setRepitSenhaCheck('green')
        Password(senha)
      }
    }
  }
  const Enviar = () => {
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const repitsenha = document.getElementById("repit-senha").value

    VerificCredentiais(nome, email, senha, repitsenha)

    if ((senhaQuant === 'green') && (senhaCaracteres === 'green') && (emailCheck === true)) {
      axios.post(`http://localhost:3000/cadastro`, {
        name: nome,
        email: email,
        password: senha
        /* email: 'moreto@email.com',
        password: '123456'  */
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

  }

  return (
    <div className='cadastro-content'>
      <NavInfo>Cadastro</NavInfo>
      <div className='cadastro-text'>
        <div className='cadastro-title'>
          <GenericTitle size="large" color="white">Informe os campos abaixo para efetuar seu cadastro</GenericTitle>
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
        <GenericLink color="white" size="medium" line>Clique aqui</GenericLink>
      </div>
    </div>
  );
}

export default Cadastro;
