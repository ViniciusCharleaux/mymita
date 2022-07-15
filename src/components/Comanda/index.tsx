import { Container } from "./styles";

interface PropsComanda {
  Guarnicao: string;
  Mistura: string;
  Tamanho: string;
}

export const Comanda: React.FC<PropsComanda> = ({Guarnicao, Mistura, Tamanho}) => {
  return (
    <Container>
      <div className="pedido-comanda">
        <p>{Tamanho}</p>
        <p>{Guarnicao}</p>
        <p>{Mistura}</p>
      </div>
      <div className="btn-comanda">
        <button>aceitar</button>
        <button className="rejeitar">rejeitar</button>
      </div>
    </Container>
  );
};
