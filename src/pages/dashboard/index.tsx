import {Container} from './styles'

import {useAuth} from '../../hooks/auth'

import {useNavigate} from 'react-router-dom'

export const Dashboard: React.FC = () => {

    const {logOut, user} = useAuth()

    const navigate = useNavigate()

    const handleLogout = () =>{
        navigate('/')
        logOut()
    }

    return(
        <Container>
            <button onClick={handleLogout}>Logout</button>
            <h1>{"bem vindo "+user?.Nome}</h1>
        </Container>
    )
}