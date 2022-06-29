import { Container } from "./styles";
import { MdDeliveryDining } from "react-icons/md";

export const EstadoPedido: React.FC = () => {
  return (
    <Container>
      <p className="status">status do pedido</p>
      <p className="andamento">seu pedido está sendo preparado...</p>

      <div className="delivery-bar">
        <MdDeliveryDining size={60} />
        <div className="aceito"></div>
        <div className="preparo"></div>
        <div className="enviado"></div>
      </div>
    </Container>
  );
};
