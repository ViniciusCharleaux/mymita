import { Container } from './styles';
import { Header } from '../../components/Header'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { images } from '../../constants';
import { useEffect, useState } from 'react';

import { MiniLoading } from '../../components/Loading';

// import {buscaLogin, createUser, CreateUserData} from '../../interfaces/user'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import {Order} from '../order';

import {Cardapio, buscaCardapio, cadastraCardapio} from '../../interfaces/cardapio';

interface LoginData {
  email: string;
  password: string;
}


// procurar remover depois. pagina nao mostra sem. 
export const ShowMenu: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cardapioHoje, setCardapio] = useState<Cardapio>({} as Cardapio);

  

  useEffect(() => {

    const fetchCardapio = async ()=> {        

      // await cadastraCardapio({Guarnicao:"Arroz, Feijão, Batata, Mandioca, Abobrinha", 
      //   Mistura:"Frango, Peixe, Carne de Porco, Carne de Vaca", Salada:"Salada"})

      const a = await buscaCardapio();
      setCardapio(a[0]);
  
    }
    fetchCardapio()
  
  },[])
  



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

              {cardapioHoje?.Guarnicao?.split(", ").map((guarnicao,index) => (
                <a key={index}>{guarnicao}</a>
              ))}

                {/* <a>ARROZ</a>
                <a>FEIJÃO</a>
                <a>NHOQUE</a>
                <a>BATATA SAUTEE</a>
                <a>MANDIOCA</a>
                <a>FAROFA</a>
                <a>OMELETE</a> */}
              </div>
              
            </div>
            <div className="right">
              <p>Mistura</p>
                            
              <div className="mistura-container">

              {cardapioHoje?.Mistura?.split(", ").map((mistura,index) => (
                <a key={index}>{mistura}</a>
              ))}

              {/* <a>FRANGO PARMEGIANA</a>
              <a>MOQUECA DE PEIXE</a>
              <a>FEIJOADA</a>
              <a>FRANGO GRELHADO</a>
              <a>CALABRESA</a>
              <a>OMELETE</a>
              <a>PORCO</a> */}
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
        data= {cardapioHoje?.Guarnicao?.split(", ")} //cardapioHoje?.Mistura?.split(", ")
      />

    </Container>
  )
}