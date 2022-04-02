import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 25%;
    height: 12.5%;
    display: flex;
    align-items: center;
    justify-content: center;

    .header__links {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        color: black;
        text-decoration: underline;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }

  main {
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: row;
    padding: 1rem 10rem;

    justify-content: space-between;
    align-items: center;

    .main__login-container {
      height: 80%;
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      justify-content: center;

      button {
        width: 19.3125rem;
        height: 5.75rem;
        background-color: var(--color-red);
        border-radius: 40px;
        color: var(--color-white);
        font-size: 3rem;
        box-shadow: 10px 5px 25px black;
        transition: 0.3s box-shadow ease-in;

        &:hover {
          box-shadow: 10px 5px 25px white;
        }
      }
    }

    .main__image {
      height: 80%;
      width: 50%;
      display: flex;
      flex-direction: column;
    }
  }
`
