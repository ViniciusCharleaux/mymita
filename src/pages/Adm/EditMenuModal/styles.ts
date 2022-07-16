import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 1200px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .content{
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;

    header{
      background-color: var(--color-red);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 68px;
      font-size: 44px;
      font-family: 'Fredoka One';
      border-radius: 50px;
    }

    main{
      background: linear-gradient(336.98deg, 
        rgba(134, 123, 123, 0.14) 50.05%, 
        rgba(196, 196, 196, 0) 118.16%);
      width: 100%;
      height: max-content;
      border-radius: 50px;

      margin-top: 0.5rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .left-side{
        width: 45%;
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        max-height: 400px;

        h3{
          font-family: 'Fredoka One';
          font-size: 32px;
          span{
            color: var(--color-red);
            font-size: 32px;
          }
        }

        .adicionar{
          width: 299px;
          height: 68px;
          background-color: var(--color-white);
          font-family: 'Fredoka One';
          font-size: 32px;
          border-radius: 30px;
          margin-top: 2rem;
        }

        .add-guarnicao{
          width: 299px;
          height: 68px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          input{
            height: 42px;
            width: 210px;
            border-radius: 30px;
            padding: 0 1rem;

            &:focus{
              outline: 1px solid var(--color-red);
            }
          }

          .ok{
            background-color: var(--color-red);
            padding: 0.8rem;
            border-radius: 50%;
            color: white;
            font-family: 'Fredoka One';

            &:hover{
              text-decoration: underline;
            }
          }

        }
        .cancel{
            padding: 0.5rem;
            border-radius:50%;
            background-color: white;
          }

      }

      .right-side{
        width: 45%;
        padding: 1rem 2rem;

        display: flex;
        flex-direction: column;
        overflow-y: auto;
        max-height: 400px;

        h3{
          font-family: 'Fredoka One';
          font-size: 32px;
          span{
            color: #75674C;
            font-size: 32px;
          }
        }

        .adicionar{
          width: 299px;
          height: 68px;
          background-color: var(--color-white);
          font-family: 'Fredoka One';
          font-size: 32px;
          border-radius: 30px;
          margin-top: 2rem;
        }

        .add-guarnicao{
          width: 299px;
          height: 68px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          input{
            height: 42px;
            width: 220px;
            border-radius: 30px;
            padding: 0 1rem;

            &:focus{
              outline: 1px solid var(--color-red);
            }
          }

          .ok{
            background-color: var(--color-red);
            padding: 0.8rem;
            border-radius: 50%;
            color: white;
            font-family: 'Fredoka One';

            &:hover{
              text-decoration: underline;
            }
          }
        }
      }

    }

    footer{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
    }

    .finish{
      width: 225px;
      height: 68px;
      border-radius: 50px;
      font-family: 'Fredoka One';
      background-color: var(--color-red);
      color: white;
      font-size: 32px;

      &:hover{
        text-decoration: underline;
      }
    }
  }

  
`;