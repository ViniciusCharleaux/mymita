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
`
