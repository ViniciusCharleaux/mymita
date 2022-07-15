import styled from "styled-components";

export const Container = styled.div``;

export const ModalContainer = styled.div`
  width: 100%;
  height: 700px;
  border-radius: 50px;
  padding-right: 2rem;

  .img-sopa {
    width: 50%;
    max-height: 100%;
    border-radius: 50px;
    -webkit-mask-image: linear-gradient(to left, transparent 10%, black 70%);
  }
  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    align-items: center;
    border-radius: 50px;

    .titulo {
      align-self: center;
    }

    .conteudo {
      width: 50%;
      height: 75%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      

      background: linear-gradient(
        336.98deg,
        rgba(134, 123, 123, 0.14) 50.05%,
        rgba(196, 196, 196, 0) 118.16%
      );
      border-radius: 50px;
      margin: 15px;

      font-family: "Fredoka One";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
    }

    
    

    .opcoes-img {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: white;
      padding: 1rem 1.5rem;
      border-radius: 20px;
      width: 80%;
      .ponto{
        width: 40px;
        height: 58px;
      }
    }

    .img-ponto-mapa {
      margin: 15px;
    }

    .endereco {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      
      
    }

    input {
      margin: 0.5rem 1rem;
      width: 25px;
      height: 25px;

      color: #ffa800;
    }

    .add-endereco {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background-color: white;
      padding: 1rem 1.5rem;
      border-radius: 20px;
      align-items: center;
     

      .btn-add-adress {
        font-size: 30px;
        width: 35px;
        height: 35px;
        color: white;
        background-color: black;
        border-radius: 25px;
        font-weight: bold;
      }
    }

    .botoes {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      button {
        width: 200px;
        height: 50px;

        font-family: "Fredoka One";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;

        border-radius: 50px;
        margin: 10px;
      }

      .avancar {
        background: #ff0000;
        box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
        color: white;
        font-weight: bold;
      }

      .voltar {
        background: white;
        color: #ffa800;
        border: 3px solid #ffa800;
      }
    }
  }
`;
