import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;

  aside {
    width: 20%;
    height: 100%;
    background: linear-gradient(
      170.49deg,
      rgba(255, 0, 0, 0.8) -0.24%,
      rgba(255, 168, 0, 0.8) 105.77%
    );
    border-radius: 0px 60px 60px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0.5rem;

    .user__container {
      height: 10%;
      width: 85%;
      background-color: var(--color-white);
      border-radius: 60px;
      box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      img {
        width: 57px;
        border-radius: 50%;
      }

      h1 {
        margin-left: 1rem;
      }
    }

    .buttons__containers {
      width: 100%;
      height: 100%;
      // height: calc(100% - (10% + 4rem));

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .address__button {
        height: 10%;
        min-height: 60px;
        width: 85%;
        background-color: transparent;
        color: var(--color-white);
        font-size: 2.5rem;
        border-top: 1px solid var(--color-white);
        border-bottom: 1px solid var(--color-white);
        margin-top: 4rem;

        &:hover {
          text-decoration: underline;
        }
      }

      .logout__button {
        width: 109px;
        height: 49px;
        border-radius: 30px;
        background-color: var(--color-orange);
        box-shadow: 0px 3px 2px gray;
        font-size: 2rem;
        color: var(--color-white);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  main {
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    align-items: center;

    .header {
      width: 100%;
      height: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .estado-pedido {
      display: flex;
      width: 85%;
      height: 20rem;
      margin: 1rem;
      //align-items: center;
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

        .historic-container {
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
        font-size: 20px;
        font-family: "fredoka one";
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

        .agenda-container {
          width: 100%;
          height: 90%;
          overflow-y: auto;
          display: flex;
          justify-content: flex-start;
          flex-direction: row;
          margin-top: 1rem;
        }
      }
    }
  }
`;
