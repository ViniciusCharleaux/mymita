import styled from "styled-components";


export const Container = styled.div``


export const ModalContainer = styled.div`

main{
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    padding: 0 6rem 0;

    justify-content: space-around;
    align-items: center;

    .conteudo{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        
    }

    .guarnicoes{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

    }

    .tamanho{
        display: flex;
        flex-direction: column;
        padding: 0 6rem;
        align-items: center;

    }

    .mistura{
        display: flex;
        flex-direction: column;
        align-items: flex-end; 
    }

    .botoes{
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
}

`