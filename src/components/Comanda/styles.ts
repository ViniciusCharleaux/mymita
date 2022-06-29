import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 12.5rem;
  height: 20rem;
  justify-content: flex-start;
  background-image: url(https://i.imgur.com/wn8FfK6.png);
  background-repeat: no-repeat;
  flex-direction: column;
  position: relative;
  margin-top: -9.5px;
  margin: -9.5px 1rem 0 0;

  .pedido-comanda {
    font-size: 15px;
    padding: 1.5rem 0rem 0rem 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .btn-comanda {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 45px;

    button {
      width: 170px;
      height: 28px;
      font-size: 20px;
      align-items: center;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 40px;
      font-family: "fredoka one";
      color: white;
      background-color: #ffa800;
    }
    
    .rejeitar {
      background-color: #ff3030;
    }
  }
`;