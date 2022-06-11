import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(255, 168, 0, 0.5) -23.56%, rgba(255, 255, 255, 0.5) 28.03%);

  main {
   
  }

  .menu__container {
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
      padding: 0 2rem ;
    }

    label{
      font-family: 'fredoka one';
    }

    
  }



`
