import { useState } from "react";
import Modal from 'react-modal';
import {Container, ModalContainer} from './styles';

export const Order: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(true); 



    return (

        <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            style={{
                content:{
                    maxWidth: "1200px",
                }
            }}
        >
            <ModalContainer>
                <main>
                    <div>
                        PEDIDO
                    </div>
                    <div className="conteudo">                
                        <div className="guarnicoes">
                            <label htmlFor="guarnicoes">Selecione as guarnições:</label>
                    
                            <p><input type="checkbox"></input> 
                            <label htmlFor="guarnicao1">Arroz</label></p>

                            <p><input type="checkbox"></input> 
                            <label htmlFor="guarnicao2">Feijão</label></p>

                            <p><input type="checkbox"></input> 
                            <label htmlFor="guarnicao3">Nhoque</label></p>

                            <p><input type="checkbox"></input> 
                            <label htmlFor="guarnicao4">Batata</label></p>

                            <p><input type="checkbox"></input> 
                            <label htmlFor="guarnicao5">Mandioca</label></p>

                            <p><input type="checkbox"></input> 
                            <label htmlFor="guarnicao6">Farofa</label></p>
                            
                        </div>

                        <div className="tamanho">
                            <label htmlFor="tamanho">Tamanho:</label>
                            <p>
                                <input type="radio" name="tamanho"></input>
                                <input type="radio" name="tamanho"></input>
                                <input type="radio" name="tamanho"></input>
                            </p>
                        </div>

                        <div className="mistura">
                            <label htmlFor="mistura">Selecione as mistura:</label>
                            
                            <p>
                            <label htmlFor="mistura2">Frango Parmegiana</label>
                            <input type="radio" name="mistura"></input>
                            </p>

                            <p>
                            <label htmlFor="mistura2">Moqueca de Peixe</label>
                            <input type="radio" name="mistura"></input>
                            </p>

                            <p>
                            <label htmlFor="mistura2">Feijoada</label>
                            <input type="radio" name="mistura"></input>
                            </p>

                            <p>
                            <label htmlFor="mistura2">Frango Grelhado</label>
                            <input type="radio" name="mistura"></input>
                            </p>

                            <p>
                            <label htmlFor="mistura2">Calabresa</label>
                            <input type="radio" name="mistura"></input>
                            </p>

                            <p>
                            <label htmlFor="mistura2">Omelete</label>
                            <input type="radio" name="mistura"></input>
                            </p>

                            
                        </div> 
                        
                    </div>
                    <div className="botoes">
                        <button
                            className='agendar'>
                            agendar
                        </button>
                        <button
                            className='finalizar'>
                            finalizar
                        </button>
                    </div>
                </main>
            </ModalContainer>

        </Modal>

        
    )
}