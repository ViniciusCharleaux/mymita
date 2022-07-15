import { Container } from "./styles";
import { Comanda } from "../../../components/Comanda";
import { Header } from "../../../components/Header";
import { Link } from "react-router-dom";

import {Pedido, buscaPedido, cadastraPedido} from "../../../interfaces/pedido"
import { useEffect, useState } from "react";

export const OrderList: React.FC = () => {

  const [pedidosHoje, setPedidos] = useState<Pedido[]>([]);

  useEffect(() => {

    const fetchPedidos = async ()=> {        

      //await cadastraPedido({Arquivado:0,Email:"teste", Guarnicao:"Arroz, Feijão, Batata",Mistura:"Carne", Salada:"Salada", Tamanho:"Grande",Valor:"15"});

      const a = await buscaPedido();
      setPedidos(a);
      console.log(a);
    }
    fetchPedidos()
  
  },[])

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

        {pedidosHoje.map((pedido)=>{
          <Comanda 
          Guarnicao={pedido.Guarnicao}
          Mistura={pedido.Mistura}
          Tamanho = {pedido.Tamanho}
           />          
        })}          
        </div>
      </div>

      <Link to="/home">
        <div className="btn-sair-adm">sair</div>
      </Link>
      <br></br>
    </Container>
  );
};
