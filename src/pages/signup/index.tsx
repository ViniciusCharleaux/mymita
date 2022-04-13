import { Container } from './styles';

export const Signup: React.FC = () => {
    return (
        <Container>
            <div className="head__welcome red">
                <h1>Cadastro</h1>
            </div>
            <div className="head__welcome white">
                <h1>cabeçalho</h1>
                <div className="cadastro">
                    <form method="post" action="">
                        <h1>Login</h1>
                        <p>
                            <label for="nome">Nome</label>
                            <input id="nome" name="nome" required="required" type="text" placeholder="Digite aqui..." />
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input id="email" name="email" required="required" type="email" placeholder="Digite aqui..." />
                        </p>
                        <p>
                            <label for="senha">Senha</label>
                            <input id="senha" name="senha" required="required" type="password" placeholder="Digite aqui..." />
                        </p>
                        <p>
                            <label for="repitaSenha">Repita a senha</label>
                            <input id="repitaSenha" name="repitaSenha" required="required" type="password" placeholder="Digite aqui..." />
                        </p>

                        <p>
                            <input type="submit" value="Cadastrar" />
                        </p>

                        <a label="cancelar" href="./home/index.tsx">Cancelar</a>

                    </form>
                </div>
            </div>
        </Container>
    );
}