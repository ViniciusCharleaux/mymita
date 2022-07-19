import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(356.76deg, #C4C4C4 -116.03%, rgba(196, 196, 196, 0) 78.39%);
    border-radius: 60px;
    align-items: center;
    text-align: center;

    .etapa-on{
        background-color: #40D627; 
    }

    .etapa-off{
        background-color: #C4C4C4; 
    }

    .status{
        font-family: "fredoka one";
        font-size: 25px;
        color: red;
    }
    
    .andamento{
        font-family: "fredoka one";
        font-size: 20px;
    }

    .delivery-bar{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin: 1.5rem;

        .aceito{
            width: 12rem;
            height: 0.5rem;
            border-radius: 5px;
        }

        .preparo{
            width: 12rem;
            height: 0.5rem;
            border-radius: 5px;
        }

        .enviado{
            width: 12rem;
            height: 0.5rem;
            border-radius: 5px;
        }
    }

`