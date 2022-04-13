import styled from 'styled-components'

export const Container = styled.div`
  height: 500vh;
  width: 100vw;

  display: flex;
  flex-direction: line;

  .head__welcome {
    height: 25%;
    width: 100%;
    display: flex;

    align-items: center;
    justify-content: center;
    flex-direction: column;

    color: white;
  }

  .red {
    background-color: var(--color-red);
  }

  .white {
    background-color: var(--color-white);
    color: var(--color-brown);
  } 
`