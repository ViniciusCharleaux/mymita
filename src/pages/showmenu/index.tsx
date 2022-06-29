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

import {Order} from '../order';

interface LoginData {
  email: string;
  password: string;
}



// procurar remover depois. pagina nao mostra sem. 
export const ShowMenu: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);


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
                <a>OMELETE</a>
              </div>
            </div>
          </div>
          <div className="fazer_pedido">
            <button type="button" onClick={() => setIsModalOpen(true)}>fazer pedido</button>
          </div>
      </main>

      
      <img src={images.fritas} alt="batata frita" className='fritas'/>
      <Order 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />

    </Container>
  )
}