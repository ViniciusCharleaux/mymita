import styled from "styled-components";

export const Container = styled.div``;

export const ModalContainer = styled.div`
  width: 100%;
  height: 700px;
  border-radius: 50px;
  padding: 2rem;

  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    align-items: center;
    border-radius: 50px;

    .img-pacote {
      margin: -20px;
      display: flex;
      justify-content: flex-start;
      width: 40%;
      height: 35rem;
    }

    .conteudo {
      width: 50%;
      height: 100%;
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

    .opcao-pagamento {
      display: flex;
      flex-direction: row;
      width: 80%;
      justify-content: center;
      background-color: white;
      padding: 1.5rem 2rem;
      border-radius: 20px;

      .col1 {
        display: flex;
        width: 40%;
        flex-direction: column;
      }
    }

    .titulo {
      align-self: center;
    }

    .opcoes-img {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: white;
      padding: 1rem 1.5rem;
      border-radius: 20px;
    }

    .img-marmita {
      margin: 15px;
    }

    .opcoes-marmita {
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

    .valor {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: white;
      padding: 1rem 1.5rem;
      border-radius: 20px;
      align-items: center;

      .valor-total {
        font-size: 30px;
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
      }

      .voltar {
        background: white;
        color: #ffa800;
        border: 3px solid #ffa800;
      }
    }
  }
`;
