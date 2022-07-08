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

        .checkbox-round{
            width: 2.5em;
            height: 2.5em;
            background-color: white;
            border-radius: 50%;
            vertical-align: middle;
            border: 4px solid #FFA800;
            appearance: none;
            -webkit-appearance: none;
            outline: none;
            cursor: pointer;
        }

        .checkbox-round:checked{
            background-color: #FFA800;
            
        }

    }

    .tamanho{
        width: 300px;
        height: 500px;
        display: flex;
        flex-direction: column;
        padding: 4rem 2rem;
        align-items: center;

        .pedido_image{
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            img{
                width: 331.45px;
                height: 238.56px;
            }
           
        }
        
        .tamanho-conteudo{
            width: 300px;
            height: 150px;
            display: flex;
            flex-direction: column;
            padding: 2rem 2rem;
            align-items: center;
            font-family: 'Fredoka One';
            font-style: normal;
            font-weight: 400;
            font-size: 26px;
            color: white;

            background: #FFA800;
            box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
            border-radius: 50px;
        }
        

        .radio-tamanho{
            width: 3em;
            height: 3em;
            border-radius: 20%;
            background-color: white;
            appearance: none;
            -webkit-appearance: none;
            outline: none;
            cursor: pointer;
        }

        .radio-tamanho:checked{
            background-color: #FF0000;
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

        .radio-mistura{
            width: 2.5em;
            height: 2.5em;
            background-color: white;
            border-radius: 50%;
            vertical-align: middle;
            border: 4px solid #FFA800;
            appearance: none;
            -webkit-appearance: none;
            outline: none;
            cursor: pointer;
        }

        .radio-mistura:checked{
            background-color: #FFA800;
            
        }

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
        

        .avancar{
            background: #FF0000;
            box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
            color: white;
        }

        .cancelar{
            background: white;
            color: #FFA800;
            border: 3px solid #FFA800;
        }
    }
}

`