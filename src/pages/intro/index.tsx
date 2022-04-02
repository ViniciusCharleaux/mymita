import { Container } from './styles';

export const Intro: React.FC = () => {
  return (
    <Container>
      <header>
        <div className='header__links'>
          <a href="">cardápio</a>
          <h1>MyMita</h1>
          <a href="">contato</a>
        </div>
      </header>
      <main>
        <section className='main__login-container'>
          <button>Login</button>
        </section>
        <section className='main__image'>foto</section>
      </main>
      <footer></footer>
    </Container>
  )
}