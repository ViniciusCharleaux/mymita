import { Container } from "./styles";

interface PropsComanda {
  Pedido: string[];
}

export const Comanda: React.FC<PropsComanda> = ({Pedido}) => {
  return (
    <Container>
      <div className="pedido-comanda">
        {Pedido.map((pedido, index) => (
          <span key={index}>{pedido}</span>
        ))}
      </div>
      <div className="btn-comanda">
        <button>aceitar</button>
        <button className="rejeitar">rejeitar</button>
      </div>
    </Container>
  );
};
