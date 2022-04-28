import { Container } from './styles';

export const Signup: React.FC = () => {
    return (
        <Container>
            <main>
                <div className="main__image">
                    <h1>Cadastro</h1>
                </div>

                <div className="main__signup-container">
                    <div className="main__input-container">
                        <label htmlFor="">nome:</label>
                        <input
                            type="text"
                        //onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="main__input-container">
                        <label htmlFor="">email:</label>
                        <input
                            type="email"
                        //onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="main__input-container">
                        <label htmlFor="">senha:</label>
                        <input
                            type="password"
                        //onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="main__input-container">
                        <label htmlFor="">repita a senha:</label>
                        <input
                            type="password"
                        //onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        className='button__signup'
                    //onClick={handleSignUp}
                    >
                        cadastrar
                    </button>

                    <a href="">cancelar</a>
                </div>
            </main>
            <footer></footer>
        </Container >
    );
}