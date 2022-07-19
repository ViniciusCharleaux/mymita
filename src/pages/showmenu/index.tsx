import { Container } from './styles';
import { Header } from '../../components/Header'
import { images } from '../../constants';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import {Order} from '../order';
import {hasActivePedido} from '../../interfaces/pedido';
import {Cardapio, buscaCardapio,} from '../../interfaces/cardapio';
import { EditMenuModal } from '../Adm/EditMenuModal';
import {Loading} from '../../components/loadings'
import {useToast} from '../../hooks/toast';
 

// procurar remover depois. pagina nao mostra sem. 
export const ShowMenu: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [cardapioHoje, setCardapio] = useState<Cardapio>({} as Cardapio);
  const [loading, setLoading] = useState(false);

  const {user} = useAuth();
  const {toastTopError} = useToast();
  
  const date = new Date().toLocaleDateString('pt-BR').split('/')
  const today = date[0] + '/' + date[1]

  useEffect(() => {

    const fetchCardapio = async ()=> {        
      setLoading(true)
      const a = await buscaCardapio();
      setCardapio(a[0]);
      setLoading(false)
    }

    
    fetchCardapio()
    
  },[])

  const handleNewPedido = async () => {
    if(user){
      const res = await hasActivePedido(user.Key)

      if(res.arquivado < 3){
        toastTopError("Você tem um pedido em andamento, aguarde a conclusão do mesmo para iniciar um novo.")
      }else{
        setIsModalOpen(true)
      }
    }
  }
  

  return (
    <Container>
      <Header
        title1='cardápio'
        title2='contato'
      />
      <main>

          <div className="topo">CARDÁPIO - {today}</div>

          <div className="center">
            <div className="left">
              <p>Guarnição</p>

              {loading ?
              <Loading />
              :
              <div className="guarnicao-container">
                {cardapioHoje?.Guarnicao?.split(", ").map((guarnicao,index) => (
                  <a key={index}>{guarnicao}</a>              
                ))}
              </div>
            }
              
              
            </div>
            <div className="right">
              <p>Mistura</p>         
              {loading ?
                <Loading />
              :
                <div className="mistura-container">
                  {cardapioHoje?.Mistura?.split(", ").map((mistura,index) => (
                    <a key={index}>{mistura}</a>
                  ))}
                </div>
              }

              
            </div>
          </div>

          {user?.Privilegio === "0" 
          ? 
          (
            <div className="fazer_pedido">
              <button type="button" onClick={() => setIsEditModal(true)}>alterar cardápio</button>
            </div>
          )
          :
          (
            <div className="fazer_pedido">
              <button type="button" onClick={handleNewPedido}>fazer pedido</button>
            </div>
          )
      
        }
          
      </main>

      
      <img src={images.fritas} alt="batata frita" className='fritas'/>
      <Order 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        data= {[cardapioHoje?.Guarnicao, cardapioHoje?.Mistura]} //cardapioHoje?.Mistura?.split(", ")
      />

      <EditMenuModal 
        isOpen={isEditModal}
        onRequestClose={() => setIsEditModal(false)}
      />

    </Container>
  )
}