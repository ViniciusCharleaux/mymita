import { Container } from "./styles";

export const Comanda: React.FC = () => {
  return (
    <Container>
      <div className="pedido-comanda">
        <p>1x text</p>
        <p>1x text</p>
        <p>1x text</p>
        <p>1x text</p>
        <p>1x text</p>
      </div>
      <div className="btn-comanda">
        <button>aceitar</button>
        <button className="rejeitar">rejeitar</button>
      </div>
    </Container>
  );
};
