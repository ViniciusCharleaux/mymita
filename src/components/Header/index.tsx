import {Container} from './styles'
import {images} from '../../constants'
import { Link } from "react-router-dom";

interface HeaderProps{
    title1: string;
    title2: string;
}

export const Header: React.FC<HeaderProps> = ({title1, title2}) => {
    return(
        <Container>

            <Link to="/menu"><h2>{title1}</h2></Link>
            <Link to="/"> <img src={images.MyMitaLogo} alt="logo" /></Link>
            <Link to="/"><h2>{title2}</h2></Link>

        </Container>
    )
}