import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    padding: 0 6rem 0;

    justify-content: space-between;
    align-items: center;

    .main__login-container {
      height: 95%;
      width: 32%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      justify-content: space-around;
      background-color: rgba(134, 123, 123, 0.14);
      border-radius: 70px;

      .main__input-container{
        display: flex;
        flex-direction: column;
        align-items: center ;
      }

      input{
        height: 3rem;
        width: 17rem;
        border-radius: 20px;
        box-shadow: 10px 5px 25px rgba(0, 0, 0, 0.25);
      }

      .button__login {
        width: 17rem;
        height: 4.5rem;
        background-color: var(--color-red);
        border-radius: 40px;
        color: var(--color-white);
        font-size: 2.5rem;
        transition: 0.3s box-shadow ease-in;
      }

      .main__social{
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-around;

        .button__social{
          background-color: #fff;
          height: 70px;
          width: 70px;
          border-radius: 20px;
          border: 1px solid rgba(255, 168, 0, 1);
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
