import {ModalContainer} from './styles'

import {IoMdClose} from 'react-icons/io'

import { useState } from "react";
import Modal from 'react-modal';
import images from "../../../constants/images";

import { EditMenuButton} from '../../../components/EditMenuButton';

interface EditMenuModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export const EditMenuModal: React.FC<EditMenuModalProps> = ({isOpen,onRequestClose}) => {
  
  const [guarnicoes, setGuarnicoes] = useState<string[]>([]);
  const [mistura, setMistura] = useState<string[]>(["Arroz"]);

  const [isEditGuarnicaoOpen, setIsEditGuarnicaoOpen] = useState(false)
  const [isEditMisturaOpen, setIsEditMisturaOpen] = useState(false)

  const [newGuarnicao, setNewGuarnicao] = useState('')

  const addNewGuarnicao = () => {
    guarnicoes.push(newGuarnicao)

    setIsEditGuarnicaoOpen(false)

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
                  />
                ))}

              {isEditGuarnicaoOpen 
              ? (
                <div className="add-guarnicao">
                    <button 
                      onClick={() => setIsEditGuarnicaoOpen(false)}
                      className="cancel"
                    >
                      <IoMdClose/>
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

                <button>+  Adicionar</button>
              </aside>
            </main>
            
          </div>
      </ModalContainer>

        
    </Modal>

</>
  )
}