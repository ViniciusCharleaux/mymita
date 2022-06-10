import styled from "styled-components";


export const Container = styled.div``


export const ModalContainer = styled.div`
    width: 100%;
    height: 700px;
    padding: 2rem;
    


main{
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;

    justify-content: space-around;
    align-items: center;
    border-radius: 50px;


    .conteudo{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        background: linear-gradient(336.98deg, rgba(134, 123, 123, 0.14) 50.05%, rgba(196, 196, 196, 0) 118.16%);
        border-radius: 50px;
        margin: 15px;
        
        
    }
    .topo{
        width: 1050px;
        height: 77px;
        left: 71px;
        top: 35px;
        text-align: center;
        align-items: center;
        font-family: 'Fredoka One';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;

        color: white;
        

        background: #FF3030;
        box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
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