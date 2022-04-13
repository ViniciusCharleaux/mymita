import {Container} from './styles'
import {images} from '../../constants'

interface HeaderProps{
    title1: string;
    title2: string;
}

export const Header: React.FC<HeaderProps> = ({title1, title2}) => {
    return(
        <Container>

            <h2>{title1}</h2>
            <img src={images.MyMitaLogo} alt="logo" />
            <h2>{title2}</h2>

        </Container>
    )
}