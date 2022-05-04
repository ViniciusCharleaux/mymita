import { Container } from './styles';

import { Header } from '../../components/Header'
import { useState } from 'react';
import { images } from '../../constants';
import { createUser, CreateUserData } from '../../interfaces/user';

export const Signup: React.FC = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const handleSignUp = async() => {


        if(password === confirmPassword){

            const CUD:CreateUserData = {
                Nome: name,
                Privilegio: '1',
                Senha: password,
                Email: email
            }
            
            await createUser(CUD,'')

        }else{
            alert('As senhas sao diferentes!')
        }
        
    
        //chamar função e passar loginData
    
      }

    return (
        <Container>
            
            <main>
                <div className="main__image">
                    <img src={images.cadastroImg} alt="cadastro image" />
                </div>

                <div className="main__signup-container">
                    <Header
                        title1='cardápio'
                        title2='contato'
                    />
                    <div className="main__input-container">
                        <label htmlFor="">nome:</label>
                        <input
                            type="text"
                            placeholder="Digite aqui..."
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="main__input-container">
                        <label htmlFor="">email:</label>
                        <input
                            type="email"
                            placeholder="Digite aqui..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="main__input-container">
                        <label htmlFor="">senha:</label>
                        <input
                            type="password"
                            placeholder="Digite aqui..."
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="main__input-container">
                        <label htmlFor="">repita a senha:</label>
                        <input
                            type="password"
                            placeholder="Digite aqui..."
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <div className="main__buttons-container">
                        <button
                            className='button__signup'
                            onClick={handleSignUp}
                        >
                            cadastrar
                        </button>

                        <a href="/" className = "button__cancel">cancelar</a>
                    </div>
                </div>
            </main>
            <footer></footer>
        </Container >
    );
}