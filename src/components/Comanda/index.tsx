import { useState } from "react";
import { Container } from "./styles";

interface PropsComanda {
  Pedido: string[];
  price: string;
  size: string;
  cliente: string;
  address: string;
  chave: string;
  arquivado: number;
  handleAcceptOrder: (chave: string) => void;
  handleCancelOrder: (chave: string) => void;
  handleSendOrder: (chave: string) => void;
  handleFinishOrder: (chave: string) => void;
}

export const Comanda: React.FC<PropsComanda> = ({Pedido, price, size, cliente, chave, handleAcceptOrder, handleCancelOrder, arquivado, handleSendOrder, handleFinishOrder}) => {

  const [status, setStatus] = useState(arquivado);

  const handleAccept = () => {
    handleAcceptOrder(chave)
    setStatus(1)
  }
  const handleReject = () => {
    handleCancelOrder(chave)
    setStatus(4)
  }

  const handleSend = () => {
    handleSendOrder(chave)
    setStatus(2)
  }

  return (
    <Container>
      <div className="pedido-comanda">
        <header>
          <h3>{cliente}</h3>
          <h4>Tamanho: {size}</h4>
        </header>
        
        {Pedido.map((pedido, index) => (
          <span key={index}>1x {pedido}</span>
        ))}
      
        
      </div>
      <div className="btn-comanda">
        {status === 0 
        ? 
        (
          <>
            <h2>Aguardando confirmação</h2>
            <button onClick={handleAccept}>confirmar</button>
            <button onClick={handleReject} className="rejeitar">rejeitar</button>
          </>
        )
        : 
        (
          status === 1 
          ? 
          (
            <>
              <h2>Pedido aceito</h2>
              <button onClick={handleSend}>Enviar pedido</button>
            </>
          )
          :
          status === 2 ?
          (
            <>
            <h2>Pedido em rota</h2>
            <button onClick={handleSend}>Concluir</button>
            </>
          )
          :
          status === 3 ?
          (
            <h2>Pedido concluído</h2>
          )
          :
          null
        )
      }
        
      </div>
    </Container>
  );
};
