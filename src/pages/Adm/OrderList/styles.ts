import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(255, 168, 0, 0.5) -23.56%,
    rgba(255, 255, 255, 0.5) 28.03%
  );

  .ped{
    width: 79rem;
    display: flex;
    align-items: start;
  }

  p{
    font-family: 'fredoka one';
    font-size: 25px;
  }
  .center {
    width: 80rem;
    height: 80%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    //align-items: center;

    .barra {
      width: 80rem;
      height: 0.35rem;
      background: #c4c4c4;
      border-radius: 30px;
    }

    .varias-comandas{
      display: flex;
      flex-direction: row;
    }
    
  }
  .btn-sair-adm{
    height: 3rem;
    width: 7rem;
    background-color: #ffa800;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'fredoka one';
    font-size: 25px;
    color: white;
  }
`;
