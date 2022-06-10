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


// procurar remover depois porem pagina nao mostra sem. 
export const ShowMenu: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<Boolean>(false);

  const {signIn} = useAuth()
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
        
        
      </main>
      <footer></footer>
    </Container>
  )
}