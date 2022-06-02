import { Container } from './styles';
import {Header} from '../../components/Header'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import { images } from '../../constants';
import { useState } from 'react';

import {MiniLoading} from '../../components/Loading';

// import {buscaLogin, createUser, CreateUserData} from '../../interfaces/user'

import {useNavigate} from 'react-router-dom'

import {useAuth} from '../../hooks/auth';
import {useToast} from '../../hooks/toast';

interface LoginData {
  email: string;
  password: string;
}

export const Home: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<Boolean>(false);

  const {signIn, user} = useAuth()
  const {toastTopSuccess} = useToast()

  const navigate = useNavigate()

  const handleLogin = async() => {

    setLoading(true)

    const res = await signIn({email, password})

    if(res){
      toastTopSuccess('Login bem sucedido')
      
      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard')
      },1000);


    }

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
            <label htmlFor="">email:</label>
            <input 
              type="text" 
              onChange={(e) => setEmail(e.target.value)}
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
            // onClick={(event) => navigate('/dashboard')}
          >
            login
            {loading && <MiniLoading/>}
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