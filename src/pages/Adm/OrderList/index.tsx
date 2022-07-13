import { Container } from "./styles";
import { Comanda } from "../../../components/Comanda";
import { Header } from "../../../components/Header";
import { Link } from "react-router-dom";


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

      <Link to="/home">
        <div className="btn-sair-adm">sair</div>
      </Link>
      <br></br>
    </Container>
  );
};
