import { Container } from "./styles";
import { Comanda } from "../../../components/Comanda";
import { Header } from "../../../components/Header";

export const OrderList: React.FC = () => {
  return (
    <Container>
      <Header title1="cardápio" title2="contato"></Header>
      <div className="ped">
        <p>pedidos:</p>
      </div>
      <br></br>
      <div className="center">
        <div className="barra"></div>
        <div className="varias-comandas">
          <Comanda />
          <Comanda />
          <Comanda />
        </div>
      </div>
    </Container>
  );
};
