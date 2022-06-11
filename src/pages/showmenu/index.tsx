import { Container } from './styles';
import { Header } from '../../components/Header'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { images } from '../../constants';
import { useState } from 'react';

import { MiniLoading } from '../../components/Loading';

// import {buscaLogin, createUser, CreateUserData} from '../../interfaces/user'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface LoginData {
  email: string;
  password: string;
}


// procurar remover depois. pagina nao mostra sem. 
export const ShowMenu: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<Boolean>(false);

  const { signIn } = useAuth()
  const { toastTopSuccess } = useToast()

  const navigate = useNavigate()

  const handleLogin = async () => {

    setLoading(true)

    const res = await signIn({ email, password })

    if (res) {
      toastTopSuccess('Login bem sucedido')

      setTimeout(() => {
        setLoading(false);
        navigate('/dashboard')
      }, 1000);


    }

  }

  return (
    <Container>
      <Header
        title1='cardápio'
        title2='contato'
      />
      <main>
        <div className='menu__container'>

          <div className="center">
            <div className="left">
              <p>Guarnição</p>
              <div className="historic-container">
                <p>ARROZ</p>
                <p>FEIJÃO</p>
                <p>NHOQUE</p>
                <p>BATATA SAUTEE</p>
                <p>MANDIOCA</p>
                <p>FAROFA</p>
              </div>
            </div>
            <div className="right">
              <p>Mistura</p>
              <div className="agenda-container">
              <p>FRANGO PARMEGIANA</p>
              <p>MOQUECA DE PEIXE</p>
              <p>FEIJOADA</p>
              <p>FRANGO GRELHADO</p>
              <p>CALABRESA</p>
              <p>OMELETE</p>
                
              </div>
            </div>
          </div>



        </div>

      </main>
      <footer></footer>
    </Container>
  )
}