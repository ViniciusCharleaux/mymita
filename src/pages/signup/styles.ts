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
      height: 90%;
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      justify-content: space-around;
      
      border-radius: 70px;

    .main__input-container{
      display: flex;
      flex-direction: column;
      align-items: left ;
    }

    label{
      font-family: 'fredoka one';
    }

    input{
      height: 2.5rem;
      width: 20rem;
      border-radius: 20px;
      box-shadow: 10px 5px 25px rgba(0, 0, 0, 0.25);
      background-color: #e4e4e4;
      font-family: 'fredoka one';
      padding: 0 2rem ;
      margin: 0.5rem 0;
    }


    .main__buttons-container {
      display:flex;
      flex-direction: row;
    }

    button {
      width: 10rem;
      height: 3rem;
      border-radius: 40px;
      font-size: 1.5rem;
      margin: 0 0.5rem;
      box-shadow: 10px 5px 25px rgba(0, 0, 0, 0.25);
    }

    .button__signup {
      background-color: var(--color-red);
      color: var(--color-white);
      transition: 0.3s box-shadow ease-in;
      font-family: 'fredoka one';
    }

    .button__cancel {
      background-color: #FFA800;
      color: var(--color-white);
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