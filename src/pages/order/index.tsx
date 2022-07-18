import { useEffect, useState } from "react";
import Modal from 'react-modal';
import images from "../../constants/images";
import { Container, ModalContainer } from './styles';
import { Payment } from '../payment';

interface OrderProps {
    isOpen: boolean;
    onRequestClose: () => void;
    data: string[];
}

interface Option{
    isSelected: boolean;
    option: string;
}


Modal.setAppElement('div')
export const Order: React.FC<OrderProps> = ({ isOpen, onRequestClose, data}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedOptions, setSelectedOptions] = useState<Option[]>([])
    const [finalSelections, setFinalSelections] = useState<string[]>([])

    //const [guarnicaoSplitted, setGuarnicaoSplitted] = useState<string[]>([])

    const [size, setSize] = useState('');



    useEffect(() => {

        if(data && isOpen){    
            data[0].split(', ').forEach((dado) => {
                setSelectedOptions((prevState) => [...prevState, {isSelected: false, option: dado}])
            })
            data[1].split(', ').forEach((dado) => {
                setSelectedOptions((prevState) => [...prevState, {isSelected: false, option: dado}])
            })
        }
        
    },[data,isOpen])

    const handleSelectOption = (index: number) => {
        selectedOptions[index].isSelected = !selectedOptions[index].isSelected;
    }

    const handleSubmit = () => {
        selectedOptions.forEach((option) => {
            if (option.isSelected){
                setFinalSelections((prevState) => [...prevState, option.option])
            }
        })

        setIsModalOpen(true)
    }

    return (
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
                    <main>
                        <div className="topo">
                            PEDIDO
                        </div>
                        <div className="conteudo">
                            <div className="guarnicoes">
                                <label htmlFor="guarnicoes" className="titulo">Selecione as guarnições:</label>

                                {data[0] && data[0].split(', ')?.map((guarnicao, index) => (
                                    <p key={index}><input type="checkbox" className="checkbox-round" onChange={() => handleSelectOption(index)}></input>
                                    <label htmlFor={`guarnicao${index+1}`}>{guarnicao}</label></p>
                                ))}

                            </div>

                            <div className="tamanho">
                                <div className="pedido_image">
                                    <img src={images.pedidoImg} alt="pedido image" />
                                </div>
                                <div className="tamanho-conteudo">
                                    <label htmlFor="tamanho">TAMANHO:</label>
                                    <p> 
                                        <input
                                          type="radio"
                                          name="tamanho"
                                          className="radio-tamanho"
                                          value="Pequena"
                                          onChange={e =>setSize(e.target.value)}
                                         />
                                        <input 
                                            type="radio" 
                                            name="tamanho" 
                                            className="radio-tamanho" 
                                            value="Media" 
                                            onChange={e => setSize(e.target.value)}
                                        />
                                        <input 
                                            type="radio" 
                                            name="tamanho" 
                                            className="radio-tamanho"
                                            value="Grande" 
                                            onChange={e => setSize(e.target.value)}
                                        />
                                    </p>
                                </div>

                            </div>

                            <div className="mistura">
                                <label htmlFor="mistura" className="titulo">Selecione a mistura:</label>

                                {data[1]?.split(', ')?.map((guarnicao, index) => (
                                    <p key={index}><input type="radio" name="mistura" className="radio-mistura" onChange={() => handleSelectOption(index + data[0]?.split(', ').length)}></input>
                                    <label htmlFor={`mistura${index+1}`}>{guarnicao}</label></p>
                                ))}

                            </div>
                        </div>
                        <div className="botoes">
                            <button
                                className='cancelar' onClick={() => onRequestClose()}>
                                cancelar
                            </button>
                            <button
                                className='avancar' onClick={handleSubmit}>
                                avançar &gt;
                            </button>
                        </div>
                    </main>

                    <Payment
                        isOpen={isModalOpen}
                        onRequestClose={() => setIsModalOpen(false)}
                        data={{data: finalSelections, size: size}}
                    />
                </ModalContainer>
            </Modal>
        </>
    )
}