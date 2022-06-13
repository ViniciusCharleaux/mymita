import { Container } from './styles';

import { Header } from '../../components/Header'
import { useState } from 'react';
import { images } from '../../constants';
import { CreateUserData } from '../../interfaces/user';

import {useAuth} from '../../hooks/auth'
import { useToast } from '../../hooks/toast';

import {useNavigate} from 'react-router-dom'


export const Signup: React.FC = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')

    const {createUser} = useAuth();
    const {toastTopError, toastTopSuccess} = useToast();

    const navigate = useNavigate()


    const handleSignUp = async() => {

        if(password.length < 6){
            toastTopError("A senha precisa ter no mínimo 6 digitos!")
        }else{
            if(password === confirmPassword){

                const CUD:CreateUserData = {
                    Nome: name,
                    Privilegio: '1',
                    Contato: "",
                    Endereco: "",                
                    Senha: password,
                    Email: email
    
                }
                
                const res = await createUser(CUD)
    
                if(res === 0){
                    toastTopError('Email já cadastrado!')
                }else if(res === 1){
                    toastTopSuccess('Cadastro realizado com sucesso')
                    navigate('/dashboard')
                }else if(res == 2){
                    toastTopError('Ops, algo deu errado, tente novamente mais tarde!')
                }
    
            }else{
                toastTopError("As senhas não batem!")
            }
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
                    <form onClick={(e) => e.preventDefault()}>
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
                            type='submit'
                            className='button__signup'
                            onClick={handleSignUp}
                            >
                            cadastrar
                        </button>
                        <a href="/" className = "button__cancel">cancelar</a>
                    </div>
                    </form>
                </div>
            </main>
            <footer></footer>
        </Container >
    );
}