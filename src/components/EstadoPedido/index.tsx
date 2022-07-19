import { Container } from "./styles";
import { MdDeliveryDining } from "react-icons/md";

interface EstadoPedidoProps {
  status: number;
}

export const EstadoPedido: React.FC<EstadoPedidoProps> = ({status}) => {
  return (
    <Container>
      <p className="status">status do pedido</p>
      {status === 0
      ? 
      (
        <p className="andamento">seu pedido está aguardando confirmação</p>
      )
      : status === 1 
      ?
      (
        <p className="andamento">seu pedido está sendo preparado...</p>
      ):
      status === 2
      ?
      (
        <p className="andamento">seu pedido está em rota de entrega...</p>
      ):
      null
    }
      
      

      <div className="delivery-bar">
        <MdDeliveryDining size={60} />
        <div className={`aceito ${status === 1 ? "etapa-on": "etapa-off"}`}></div>
        <div className={`preparo ${status === 2 ? "etapa-on": "etapa-off"}`}></div>
        <div className={`enviado ${status === 3 ? "etapa-on": "etapa-off"}`}></div>
      </div>
    </Container>
  );
};
