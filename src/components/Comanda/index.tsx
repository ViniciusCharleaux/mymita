import { Container } from "./styles";

interface PropsComanda {
  Pedido: string[];
  price: string;
  size: string;
  cliente: string;
  address: string;
}

export const Comanda: React.FC<PropsComanda> = ({Pedido, price, size, cliente, address}) => {
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
        <button>confirmar</button>
        <button className="rejeitar">rejeitar</button>
      </div>
    </Container>
  );
};
