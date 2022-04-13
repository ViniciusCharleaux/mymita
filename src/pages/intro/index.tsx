import { Container } from './styles';

import {Header} from '../../components/Header'

export const Intro: React.FC = () => {
  return (
    <Container>
      <Header 
        title1='cardápio'
        title2='contato'
      />
      <main>
        <div className='main__login-container'>

          <div className="main__input-container">
            <label htmlFor="">nome</label>
            <input type="text" name="" id="" />
          </div>

          <div className="main__input-container">
            <label htmlFor="">nome</label>
            <input type="text" name="" id="" />
          </div>
        

          <button
            className='button__login'
          >
            login
          </button>

          <div className="main__social">
            <button
              className='button__social'
            >
              Google
            </button>
            <button
              className='button__social'
            >
              Facebook
            </button>
          </div>

          <a href="">não possui uma conta ?</a>

        </div>
        <div className='main__image'>

        </div>
      </main>
      <footer></footer>
    </Container>
  )
}