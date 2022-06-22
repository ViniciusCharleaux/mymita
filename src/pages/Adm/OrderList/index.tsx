import { Container } from "./styles";
import { Comanda } from "../../../components/Comanda";
import { Header } from "../../../components/Header";

export const OrderList: React.FC = () => {
  return (
    <Container>
        <Header title1="cardápio" title2="contato"></Header>
      <div className="center">
        <div className="barra">
          <Comanda/>
        </div>
      </div>
    </Container>
  );
};
