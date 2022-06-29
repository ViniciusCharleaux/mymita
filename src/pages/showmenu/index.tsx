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

          <div className="topo">CARDÁPIO - 13/04</div>

          <div className="center">
            <div className="left">
              <p>Guarnição</p>
              <div className="guarnicao-container">
                <a>ARROZ</a>
                <a>FEIJÃO</a>
                <a>NHOQUE</a>
                <a>BATATA SAUTEE</a>
                <a>MANDIOCA</a>
                <a>FAROFA</a>
              </div>
            </div>
            <div className="right">
              <p>Mistura</p>
              <div className="mistura-container">
                <a>FRANGO PARMEGIANA</a>
                <a>MOQUECA DE PEIXE</a>
                <a>FEIJOADA</a>
                <a>FRANGO GRELHADO</a>
                <a>CALABRESA</a>
                <a>OMELETE</a>
              </div>
            </div>
          </div>
          <div className="fazer_pedido">
            <button type="button">fazer pedido</button>
          </div>
      </main>

      
      <img src={images.fritas} alt="batata frita" className='fritas'/>

    </Container>
  )
}