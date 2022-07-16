import {Container} from './styles';
import {IoMdClose} from 'react-icons/io'

interface EditMenuButtonProps{
  text: string
  onClick: () => void
}

export const EditMenuButton:React.FC<EditMenuButtonProps> = ({text, onClick}) => {
  return(
    <Container>
      <button 
        onClick={onClick}
      >
        <IoMdClose size={25}/>
      </button>
      <span>{text}</span>
    </Container>
  )
}