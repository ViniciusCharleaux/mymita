import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(255, 168, 0, 0.5) -23.56%,
    rgba(255, 255, 255, 0.5) 28.03%
  );

  .center {
    width: 100%;
    height: 80%;
    display: flex;

    justify-content: center;

    .barra {
      width: 80rem;
      height: 0.5rem;

      background: #c4c4c4;
      border-radius: 30px;
    }
  }
`;
