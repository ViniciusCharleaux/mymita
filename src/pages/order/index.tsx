import { useState } from "react";
import Modal from 'react-modal';
import images from "../../constants/images";
import { Container, ModalContainer } from './styles';

interface OrderProps{
    isOpen: boolean;
    onRequestClose: () => void; 
}

export const Order: React.FC<OrderProps> = ({isOpen, onRequestClose}) => {


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

                                <p><input type="checkbox" className="checkbox-round"></input>
                                    <label htmlFor="guarnicao1">ARROZ</label></p>

                                <p><input type="checkbox" className="checkbox-round"></input>
                                    <label htmlFor="guarnicao2">FEIJÃO</label></p>

                                <p><input type="checkbox" className="checkbox-round"></input>
                                    <label htmlFor="guarnicao3" >NHOQUE</label></p>

                                <p><input type="checkbox" className="checkbox-round"></input>
                                    <label htmlFor="guarnicao4">BATATA</label></p>

                                <p><input type="checkbox" className="checkbox-round"></input>
                                    <label htmlFor="guarnicao5">MANDIOCA</label></p>

                                <p><input type="checkbox" className="checkbox-round"></input>
                                    <label htmlFor="guarnicao6">FAROFA</label></p>

                            </div>

                            <div className="tamanho">
                                <div className="pedido_image">
                                    <img src={images.pedidoImg} alt="pedido image" />
                                </div>
                                <div className="tamanho-conteudo">
                                    <label htmlFor="tamanho">TAMANHO:</label>
                                    <p>
                                        <input type="radio" name="tamanho" className="radio-tamanho"></input>
                                        <input type="radio" name="tamanho" className="radio-tamanho"></input>
                                        <input type="radio" name="tamanho" className="radio-tamanho"></input>
                                    </p>
                                </div>

                            </div>

                            <div className="mistura">
                                <label htmlFor="mistura" className="titulo">Selecione a mistura:</label>

                                <p>
                                    <label htmlFor="mistura2">FRANGO PARMEGIANA</label>
                                    <input type="radio" name="mistura" className="radio-mistura"></input>
                                </p>

                                <p>
                                    <label htmlFor="mistura2">MOQUECA DE PEIXE</label>
                                    <input type="radio" name="mistura" className="radio-mistura"></input>
                                </p>

                                <p>
                                    <label htmlFor="mistura2">FEIJOADA</label>
                                    <input type="radio" name="mistura" className="radio-mistura"></input>
                                </p>

                                <p>
                                    <label htmlFor="mistura2">FRANGO GRELHADO</label>
                                    <input type="radio" name="mistura" className="radio-mistura"></input>
                                </p>

                                <p>
                                    <label htmlFor="mistura2">CALABRESA</label>
                                    <input type="radio" name="mistura" className="radio-mistura"></input>
                                </p>

                                <p>
                                    <label htmlFor="mistura2">OMELETE</label>
                                    <input type="radio" name="mistura" className="radio-mistura"></input>
                                </p>

                            </div>

                        </div>
                        <div className="botoes">
                            <button
                                className='agendar'>
                                agendar
                            </button>
                            <button
                                className='avancar'>
                                avançar
                            </button>
                        </div>
                    </main>
                </ModalContainer>

            </Modal>

        </>


    )
}