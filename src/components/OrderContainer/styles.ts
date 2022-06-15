import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 6rem;
  display: flex;
  justify-content: center;
  background: #ffffff;
  border-radius: 1.8rem;
  padding: 1rem;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.25);

  margin-bottom: 1rem;

  .left_pedido {
    width: 30%;
    display: flex;
    align-items: center;

    svg {
      width: 80%;
    }
  }

  .right_pedido {
    width: 70%;

    h6{
      font-family: "fredoka one";
      font-size: 20px;
    }

    .historic-desc{
        font-size: 15px;
    }
  }
`;
