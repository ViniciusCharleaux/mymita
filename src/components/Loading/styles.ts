import styled from "styled-components";

export const Container = styled.div`

    border: 3px solid var(--color-white);
    width: 2rem;
    height: 2rem;
    border-top: 3px solid var(--color-red) ;
    border-radius: 50%;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

`;