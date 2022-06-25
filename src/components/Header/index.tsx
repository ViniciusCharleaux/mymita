import {Container} from './styles'
import {images} from '../../constants'
import { useNavigate } from "react-router-dom";

interface HeaderProps{
    title1: string;
    title2: string;
}

export const Header: React.FC<HeaderProps> = ({title1, title2}) => {
    const navigate = useNavigate();
    return(
        <Container>

            <a href='/dashboard'><h2>{title1}</h2></a>
            <a href="/"> <img src={images.MyMitaLogo} alt="logo" /></a>
            <a href="/home"><h2>{title2}</h2></a>

        </Container>
    )
}