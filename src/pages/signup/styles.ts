import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;
  align-items: center;

  main {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    padding: 0 6rem 0;
    
    justify-content: space-between;
    align-items: center;

    .main__signup-container {
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
      align-items: left ;
    }

    input{
      height: 2.5rem;
      width: 17rem;
      border-radius: 20px;
      box-shadow: 10px 5px 25px rgba(0, 0, 0, 0.25);
      padding: 0 2rem ;
    }

    label{
      font-family: 'arial';
    }

    .button__signup {
      width: 17rem;
      height: 4.5rem;
      background-color: var(--color-red);
      border-radius: 40px;
      color: var(--color-white);
      font-size: 2.5rem;
      transition: 0.3s box-shadow ease-in;
      font-family: 'fredoka one';
    }

    .main__image {
      height: 80%;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img{
        width: 100%;
      }

    a{
      color: var(--color-red);
      text-decoration: underline;
      font-family: 'fredoka one';
    }

  }

`