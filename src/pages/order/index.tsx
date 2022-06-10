import { useState } from "react";
import Modal from 'react-modal';
import {Container, ModalContainer} from './styles';

export const Order: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(true); 



    return (

        <>
        

        <h1>ola</h1>

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
                    <div className="topo">
                        PEDIDO
                    </div>
                    <div className="conteudo">                
                        <div className="guarnicoes">
                            <label htmlFor="guarnicoes" className="titulo">Selecione as guarnições:</label>
                    
                            <p><input type="radio"></input> 
                            <label htmlFor="guarnicao1">ARROZ</label></p>

                            <p><input type="radio"></input> 
                            <label htmlFor="guarnicao2">FEIJÃO</label></p>

                            <p><input type="radio"></input> 
                            <label htmlFor="guarnicao3">NHOQUE</label></p>

                            <p><input type="radio"></input> 
                            <label htmlFor="guarnicao4">BATATA</label></p>

                            <p><input type="radio"></input> 
                            <label htmlFor="guarnicao5">MANDIOCA</label></p>

                            <p><input type="radio"></input> 
                            <label htmlFor="guarnicao6">FAROFA</label></p>
                            
                        </div>

                        <div className="tamanho">
                            <label htmlFor="tamanho">TAMANHO:</label>
                            <p>
                                <input type="radio" name="tamanho"></input>
                                <input type="radio" name="tamanho"></input>
                                <input type="radio" name="tamanho"></input>
                            </p>
                        </div>

                        <div className="mistura">
                            <label htmlFor="mistura" className="titulo">Selecione a mistura:</label>
                            
                            <p>
                            <label htmlFor="mistura2">FRANGO PARMEGIANA</label>
                            <input type="radio" name="mistura"></input>
                            </p>

                            <p>
                            <label htmlFor="mistura2">MOQUECA DE PEIXE</label>
                            <input type="radio" name="mistura"></input>
                            </p>

                            <p>
                            <label htmlFor="mistura2">FEIJOADA</label>
                            <input type="radio" name="mistura"></input>
                            </p>

                            <p>
                            <label htmlFor="mistura2">FRANGO GRELHADO</label>
                            <input type="radio" name="mistura"></input>
                            </p>

                            <p>
                            <label htmlFor="mistura2">CALABRESA</label>
                            <input type="radio" name="mistura"></input>
                            </p>

                            <p>
                            <label htmlFor="mistura2">OMELETE</label>
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

        </>

        
    )
}