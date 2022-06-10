import styled from "styled-components";


export const Container = styled.div``


export const ModalContainer = styled.div`
    width: 100%;
    height: 700px;
    padding: 2rem;
    


main{
    width: 100%;
    height: 100%;
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

    .titulo{
        margin-bottom: 30px;

    }

    input{
        margin: 0.5rem 1rem ;
        width: 25px;
        height: 25px;

        color: #FFA800;
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
        padding: 0 2.5rem;

        font-family: 'Fredoka One';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;

    }

    .tamanho{
        width: 275px;
        height: 150px;
        display: flex;
        flex-direction: column;
        padding: 4rem 2rem;
        align-items: center;
        margin-top: 200px;

        font-family: 'Fredoka One';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        color: white;

        background: #FFA800;
        box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
        border-radius: 50px;

        input{
            width: 25px;
            height: 25px;
        }

    }

    .mistura{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 2.5rem;

        font-family: 'Fredoka One';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;

        

    }

    .botoes{
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        button{
            width: 200px;
            height: 50px;

            font-family: 'Fredoka One';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;

            border-radius: 50px;
            
        }
        

        .finalizar{
            background: #FF0000;
            box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
            color: white;
        }

        .agendar{
            background: white;
            color: #FFA800;
            border: 3px solid #FFA800;
        }
    }
}

`