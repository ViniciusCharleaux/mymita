import {Container} from './styles'

import {images} from '../../constants'

import {useAuth} from '../../hooks/auth'
import {useNavigate} from 'react-router-dom'

export const Dashboard: React.FC = () => {

    const {logOut, user} = useAuth()

    const navigate = useNavigate()

    const handleLogout = () =>{
        logOut()
        navigate('/')
    }

    return(
        <Container>
            <aside>
                <div className="user__container">
                    <img src={images.noUserImage} alt="user img" />
                    <h1>{user?.Nome}</h1>
                </div>

                <div className="buttons__containers">
                    <button className='address__button'>endereços</button>
                    <button 
                        className='logout__button'
                        onClick={handleLogout}
                    >
                        sair
                    </button>
                </div>
                
            </aside>
            <main>

            </main>
        </Container>
    )
}