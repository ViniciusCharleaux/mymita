import {Container} from './styles';
import {IoMdClose} from 'react-icons/io'

interface EditMenuButtonProps{
  text: string
}

export const EditMenuButton:React.FC<EditMenuButtonProps> = ({text}) => {
  return(
    <Container>
      <IoMdClose/>
      <span>{text}</span>
    </Container>
  )
}