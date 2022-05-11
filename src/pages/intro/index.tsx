import { Container } from './styles';

import {Header} from '../../components/Header'

import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import { images } from '../../constants';
import { useState } from 'react';
import {createUser, CreateUserData} from '../../interfaces/user'

interface LoginData {
  name: string;
  password: string;
}

export const Intro: React.FC = () => {

  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = async() => {

    const loginData: LoginData = {
      name,
      password
    }

    console.log(loginData)

    

    const CUD:CreateUserData = {
      Endereco:"123",
      Nome:"caue",
      Privilegio:"1",
      Senha:"123",
      Contato:"caue",
      Email: "caue"
    }

    await createUser(CUD)

    //await busca()

    //chamar função e passar loginData

  }

  return (
    <Container>
      <Header 
        title1='cardápio'
        title2='contato'
      />
      <main>
        <div className='main__login-container'>

          <div className="main__input-container">
            <label htmlFor="">nome:</label>
            <input 
              type="text" 
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="main__input-container">
            <label htmlFor="">senha:</label>
            <input 
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        

          <button
            className='button__login'
            onClick={handleLogin}
          >
            login
          </button>

          <div className="main__social">
            <button
              className='button__social'
            >
              <FcGoogle
                size={40}
               />
            </button>
            <button
              className='button__social'
            >
              <BsFacebook
                size={40}
              />
            </button>
          </div>

          <a href="/cadastro">não possui uma conta ?</a>

        </div>
        <div className='main__image'>
          <img src={images.mainImg} alt="main image" />
        </div>
      </main>
      <footer></footer>
    </Container>
  )
}