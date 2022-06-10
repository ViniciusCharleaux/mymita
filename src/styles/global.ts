import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    html{
        scroll-behavior: smooth;
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    :root {
      --color-white: #fff;
      --color-red: #FF3030;
      --color-orange: #FFA800;
      --color-brown: #75674C;
    }   
    
    
    button{
        cursor: pointer;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.7);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--color-white);
        position: relative;
        border-radius: 0.25rem;
        border-radius: 50px;
    }
    .react-modal-content:focus {
        outline: none;
    }
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent; 
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.7);
        }
    }


`
