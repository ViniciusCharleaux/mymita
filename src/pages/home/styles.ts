import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  .head__welcome {
    height: 25%;
    width: 100%;
    display: flex;

    align-items: center;
    justify-content: center;

    color: white;
  }

  .red {
    background-color: var(--color-red);
  }

  .orange {
    background-color: var(--color-orange);
  }

  .brown {
    background-color: var(--color-brown);
  }

  .white {
    background-color: var(--color-white);
    color: var(--color-brown);
  }
`
