import { Container } from "./styles";
import { images } from "../../constants";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { OrderContainer } from "../../components/OrderContainer";
import { EstadoPedido } from "../../components/EstadoPedido";
import { PedidoAgenda } from "../../components/PedidoAgenda";

import {buscaPedidoByUser, Pedidos, hasActivePedido} from '../../interfaces/pedido';
import { useEffect, useState } from "react";


export const Dashboard: React.FC = () => {

  const { logOut, user } = useAuth();
  const navigate = useNavigate();

  const [orderHistoric, setOrderHistoric] = useState<Pedidos[]>([]);
  const [activeOrder, setActiveOrder] = useState<Pedidos>({} as Pedidos);

  useEffect(() => {

    const fetchPedidos = async()=>{
      if(user){
        setOrderHistoric(await buscaPedidoByUser(user.Key))
        setActiveOrder(await hasActivePedido(user.Key))
      }
    }

    fetchPedidos()
  },[])


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

        {activeOrder.arquivado < 3 ?
        (
          <div className="estado-pedido">
            <EstadoPedido
              status={activeOrder.arquivado}
            />
          </div>
        ) : null}

        <div className="center">
          <div className="left">
            <p>histórico de pedidos</p>
            <div className="historic-container">
              {orderHistoric?.map((pedido, index) => (
                <OrderContainer
                  key={index}
                  data={pedido.data}
                  pagamento={pedido.pagamento}
                  valor={pedido.valor}
                  arquivado={pedido.arquivado}
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
