import {ModalContainer} from './styles'

import {IoMdClose} from 'react-icons/io'

import { useEffect, useState } from "react";
import Modal from 'react-modal';
import images from "../../../constants/images";

import {Cardapio, buscaCardapio} from '../../../interfaces/cardapio'

import { EditMenuButton} from '../../../components/EditMenuButton';

interface EditMenuModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('root');
export const EditMenuModal: React.FC<EditMenuModalProps> = ({isOpen,onRequestClose}) => {

  useEffect(() => {
    const fetchCardapio = async() =>{
      const result = await buscaCardapio();

      if(result){
        console.log(result)
      }
    }

    fetchCardapio();
  },[])

  
  const [guarnicoes, setGuarnicoes] = useState<string[]>([]);
  const [misturas, setMisturas] = useState<string[]>([]);

  const [isEditGuarnicaoOpen, setIsEditGuarnicaoOpen] = useState(false)
  const [isEditMisturaOpen, setIsEditMisturaOpen] = useState(false)

  const [newGuarnicao, setNewGuarnicao] = useState('')
  const [newMistura, setNewMistura] = useState('')

  const addNewGuarnicao = () => {

    if(newGuarnicao !== ''){
      setGuarnicoes([...guarnicoes, newGuarnicao])
      setNewGuarnicao('')
    }
    setIsEditGuarnicaoOpen(false)
  }

  const addNewMistura = () => {

    if(newMistura !== ''){
      setMisturas([...misturas, newMistura])
      setNewGuarnicao('')
    }
    setIsEditGuarnicaoOpen(false)
  }

  const removeGuarnicao = (index: number) => {
    
  }

  const removeMistura = (index: number) => {
    
  }
  
  return(
    <>

    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        style={{
            content: {
                maxWidth: "1200px",
            }
        }}
    >

      <ModalContainer>
        <div className="content">
            <header>
              EDITAR CARDÁPIO
            </header>

            <main>
              <aside className='left-side'>

                <h3><span>Guarnições</span> do dia:</h3>

                {guarnicoes.map((guarnicao, index) => (
                  <EditMenuButton 
                    text={guarnicao}
                    onClick={() => removeGuarnicao(index)}
                  />
                ))}

              {isEditGuarnicaoOpen 
              ? (
                <div className="add-guarnicao">
                    <button 
                      onClick={() => setIsEditGuarnicaoOpen(false)}
                      className="cancel"
                    >
                      <IoMdClose size={20}/>
                    </button>
                    <input type="text" onChange={(e) => setNewGuarnicao(e.target.value)}/>
                    <button className='ok' onClick={addNewGuarnicao}>Ok</button>
                </div>
              )
              :(
                <button 
                  className='adicionar'
                  onClick={() => setIsEditGuarnicaoOpen(true)}
                >
                  +  Adicionar
                </button> 
              )
            }


              </aside>
              <aside className='right-side'>

                <h3><span>Misturas</span> do dia:</h3>

                {misturas.map((mistura, index) => (
                  <EditMenuButton 
                    text={mistura}
                    onClick={() => removeMistura(index)}
                  />
                ))}

                {isEditMisturaOpen 
              ? (
                <div className="add-guarnicao">
                    <button 
                      onClick={() => setIsEditMisturaOpen(false)}
                      className="cancel"
                    >
                      <IoMdClose size={20}/>
                    </button>
                    <input type="text" onChange={(e) => setNewMistura(e.target.value)}/>
                    <button className='ok' onClick={addNewMistura}>Ok</button>
                </div>
              )
              :(
                <button 
                  className='adicionar'
                  onClick={() => setIsEditMisturaOpen(true)}
                >
                  +  Adicionar
                </button> 
              )
            }
              </aside>
            </main>
            
          </div>
      </ModalContainer>

        
    </Modal>

</>
  )
}