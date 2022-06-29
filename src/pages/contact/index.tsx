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




// procurar remover depois. pagina nao mostra sem. 
export const ShowContact: React.FC = () => {

  return (
    <Container>
      <Header
        title1='cardápio'
        title2='contato'
      />
      <main>

          <div className="topo">FALE CONOSCO!</div>

          <div className="center">
            <div className="left">
              <div className="contact-container">
                <img src={images.contato} alt="contato" className="contato" />
              </div>
            </div>
            <div className="right">
              <div className="food-foto-container">
                <img src={images.caixinha} alt="caixinha de comida" className="caixinha" />
              </div>
              
            </div>
          </div>
          <div className="fazer_pedido">
            <button type="button">fazer pedido</button>
          </div>
      </main>

      
      

    </Container>
  )
}