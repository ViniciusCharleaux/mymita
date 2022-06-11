import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(255, 168, 0, 0.5) -23.56%, rgba(255, 255, 255, 0.5) 28.03%);

  .fazer_pedido {
    width: 17rem;
    height: 4.5rem;
    background-color: var(--color-red);
    border-radius: 40px;
    color: var(--color-white);
    font-size: 2.5rem;
    transition: 0.3s box-shadow ease-in;
    font-family: 'fredoka one';
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    
  }






  .center {
    display: flex;
    width: 100%;
    height: 75%;
    justify-content: space-evenly;

    .left {
      width: 40%;
      height: 95%;
      background: linear-gradient(
        358deg,
        rgba(134, 123, 123, 0.14) 50.07%,
        rgba(196, 196, 196, 0) 129.46%
      );
      border-radius: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      max-height: 100%;

      .guarnicao-container {
        width: 100%;
        height: 90%;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-top: 1rem;
      }
    }

    p {
      color: #FF3030;
      font-family: 'Fredoka One';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 77px;
      text-align: center;
      text-transform: uppercase;
    }

    a {
      font-family: 'Fredoka One';
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 44px;
      text-transform: uppercase;
      color: #000000;
    }

    .right {
      width: 40%;
      height: 95%;
      background: linear-gradient(
        358deg,
        rgba(134, 123, 123, 0.14) 50.07%,
        rgba(196, 196, 196, 0) 129.46%
      );
      border-radius: 60px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      max-height: 100%;

      .mistura-container {
        width: 100%;
        height: 90%;
        overflow-y: auto;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        margin-top: 1rem;
      }
    }
    

`
