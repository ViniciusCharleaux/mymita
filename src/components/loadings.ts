import styled from "styled-components";

export const MiniLoading = styled.div`

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

export const Loading = styled.div`
    border: 3px solid var(--color-white);
    width: 5rem;
    height: 5rem;
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

`