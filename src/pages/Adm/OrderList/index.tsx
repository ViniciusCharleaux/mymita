import { Container } from "./styles";
import { Comanda } from "../../../components/Comanda";
import { Header } from "../../../components/Header";
import { Link } from "react-router-dom";

import {Pedidos, buscaPedido, cadastraPedido, mudaStatusPedido} from "../../../interfaces/pedido"
import { useEffect, useState } from "react";

export const OrderList: React.FC = () => {

  const [pedidosHoje, setPedidos] = useState<Pedidos[]>([]);

  useEffect(() => {

    const fetchPedidos = async ()=> {        

      //await cadastraPedido({Arquivado:0,Email:"teste", Guarnicao:"Arroz, Feijão, Batata",Mistura:"Carne", Salada:"Salada", Tamanho:"Grande",Valor:"15"});

      const a = await buscaPedido();
      setPedidos(a);
    }

    fetchPedidos()
  
  },[])

  const handleAcceptOrder = async (chave:string) => {
    await mudaStatusPedido(chave, 1)
  }
  
  const handleSendOrder = async (chave:string) => {
    await mudaStatusPedido(chave, 2)
  }

  const handleFinishOrder = async (chave:string) => {
    await mudaStatusPedido(chave, 3)
  }

  const handleCancelOrder = async (chave:string) => {
    await mudaStatusPedido(chave, 4)
  }


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

        {pedidosHoje?.map((pedido, index)=>{
          return (
            <Comanda
              key={index}
              Pedido={pedido.pedidos}
              price={pedido.valor}
              address={pedido.cliente.endereco}
              cliente={pedido.cliente.nome}
              size={pedido.tamanho}
              chave={pedido.chave}
              arquivado={pedido.arquivado}
              handleAcceptOrder={handleAcceptOrder}
              handleCancelOrder={handleCancelOrder}
              handleSendOrder={handleSendOrder}
              handleFinishOrder={handleFinishOrder}
           />  
          )
                  
        })} 

      {/* <Comanda 
        Guarnicao="teste"
        Mistura="teste"
        Tamanho = "teste"
       /> */}

        </div>
      </div>      

      <Link to="/home">
        <div className="btn-sair-adm">sair</div>
      </Link>
      <br></br>
    </Container>
  );
};
