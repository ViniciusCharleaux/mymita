import styled from "styled-components";

export const Container = styled.button`
  height: 68px;
  width: 299px;
  background: transparent;

  display: flex;
  flex-direction: row;
  

  padding: 1rem;

  span{
    font-size: 32px;
    font-weight: 400;
    font-family: 'Fredoka One';
    margin-left: 2rem;
  }

  &:hover{
    span{
      text-decoration: underline;
    }
  }

`