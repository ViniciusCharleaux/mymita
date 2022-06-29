import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 10rem;
    align-items: center;
    background-color: white;
    border-radius: 30px;
    margin: 2%;
    margin-top: 0;
    box-shadow: 0px 2px rgba(0, 0, 0, 0.25);
    padding: 0.5rem;

    .data-agenda{
        font-family: "fredoka one";
        font-size: 30px;
    }

    .corzinha{
        width: 80%;
        height: 6rem;
        background-color: #FFA800;
        margin: 0.5rem;
        border-radius: 20px;
    }
`