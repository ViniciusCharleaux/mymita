import { Container } from "./styles";

import { images } from "../../constants";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { OrderContainer } from "../../components/OrderContainer";
import { EstadoPedido } from "../../components/EstadoPedido";
import { PedidoAgenda } from "../../components/PedidoAgenda";

export const Dashboard: React.FC = () => {
  const data = [
    {
      name: "vinicius",
      data: "25/10",
      pagamento: "dinheiro",
    },
    {
      name: "cindel",
      data: "25/11",
      pagamento: "pix",
    },
  ];

  const { logOut, user } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  const splitName = () => {
    const firstName = user?.Nome.split(" ")[0];

    return firstName;
  };

  return (
    <Container>
      <aside>
        <div className="user__container">
          <img src={images.noUserImage} alt="user img" />
          <h1>{splitName()}</h1>
        </div>

        <div className="buttons__containers">
          <button className="address__button">endereços</button>
          <button className="logout__button" onClick={handleLogout}>
            sair
          </button>
        </div>
      </aside>
      <main>
        <div className="header">
          <Header title1="cardápio" title2="contato"></Header>
        </div>

        {false ? (
          <div className="estado-pedido">
            <EstadoPedido />
          </div>
        ) : null}

        <div className="center">
          <div className="left">
            <p>histórico de pedidos</p>
            <div className="historic-container">
              {data.map((pedido) => (
                <OrderContainer
                  data={pedido.data}
                  name={pedido.name}
                  pagamento={pedido.pagamento}
                />
              ))}
            </div>
          </div>
          <div className="right">
            <p>agenda de pedidos</p>
            <div className="agenda-container">
              <PedidoAgenda />
              <PedidoAgenda />
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};
