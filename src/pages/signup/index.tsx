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
                            placeholder="Digite aqui..."
                        //onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="main__input-container">
                        <label htmlFor="">email:</label>
                        <input
                            type="email"
                            placeholder="Digite aqui..."
                        //onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="main__input-container">
                        <label htmlFor="">senha:</label>
                        <input
                            type="password"
                            placeholder="Digite aqui..."
                        //onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="main__input-container">
                        <label htmlFor="">repita a senha:</label>
                        <input
                            type="password"
                            placeholder="Digite aqui..."
                        //onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="main__buttons-container">
                        <button
                            className='button__signup'
                        //onClick={handleSignUp}
                        >
                            cadastrar
                        </button>

                        <button
                            className='button__cancel'
                        //onClick={handleCancel}
                        >
                            cancelar
                        </button>
                    </div>
                </div>
            </main>
            <footer></footer>
        </Container >
    );
}