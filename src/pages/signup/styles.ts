import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  overflow: hidden;

  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  
    justify-content: space-between;
    align-items: center;

    .main__image {
      height: 100%;
      width: 55%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img{
        width: 100%;
      }
    }
    

    .main__signup-container {
      height: 90%;
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

    .main__input-container{
      display: flex;
      flex-direction: column;
      align-items: left ;
    }

    label{
      font-family: 'fredoka one';
      font-size: 15pt;
    }

    input{
      height: 3rem;
      width: 20rem;
      border-radius: 15px;
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.30);
      background-color: #e4e4e4;
      color: rgba(0, 0, 0, 0.5);
      font-family: 'fredoka one';
      font-size: 12pt;
      padding: 0 1rem ;
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

    }

    .button__signup {
      background-color: var(--color-red);
      color: var(--color-white);
      transition: 0.3s box-shadow ease-in;
      font-family: 'fredoka one';
    }

    .button__cancel{
      width: 10rem;
      height: 3rem;
      border-radius: 40px;
      font-size: 1.5rem;
      padding: 0.5rem;
      text-decoration: none;
      text-align: center;
      background-color: #FFA800;
      color: var(--color-white);
      transition: 0.3s box-shadow ease-in;
      font-family: 'fredoka one';
    }
  
}
  }
`
