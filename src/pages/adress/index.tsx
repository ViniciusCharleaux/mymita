import { useState } from "react";
import Modal from 'react-modal';
import images from "../../constants/images";
//import { Adress } from "../adress";
import { Container, ModalContainer } from './styles';
import {cadastraPedido, Pedido} from '../../interfaces/pedido';

import {useAuth} from '../../hooks/auth'

interface Data{
    data: string[];
    size: string;
    payment: string;
    price: string;
}

interface AdressProps {
    isOpen: boolean;
    onRequestClose: () => void;
    data: Data
}

export const Adress: React.FC<AdressProps> = ({ isOpen, onRequestClose, data}) => {

    const {user} = useAuth();

    const handlePedido = async() => {

        if(user){
            await cadastraPedido({
                Pedido: data.data,
                Tamanho: data.size,
                UserKey: user.Key,
                Email: user.Contato,
                Valor: "15,00",
            });
        }
        
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
                        <div className="img-sopa">
                            <img src={images.sopa} alt="sopa" className='sopa'/>
                        </div>
                        <div className="conteudo">

                            <div className="titulo">Selecione o Endereço</div>
                            <div className="opcoes-img">
                                <div className="img-ponto-mapa">
                                    <img src={images.ponto} alt="ponto" className='ponto'/>
                                </div>
                                <div className="endereco">

                                    <label>Rua x</label>
                                    <label>bairro yy</label>
                                    <label>nº 01</label>
                                    <label>muro alto, portão rosa</label>
                                </div>
                            </div>

                            

                            <div className="add-endereco">
                                <button className="btn-add-adress">+</button>
                                <label>Add novo endereço</label>
                            </div>  

                            <div className="botoes">
                                <button
                                    className='voltar' onClick={() => onRequestClose()} >
                                    &lt; voltar
                                </button>
                                <button
                                    className='avancar'
                                    onClick={() => handlePedido()}
                                    >
                                    Finalizar &#10003;
                                </button>
                            </div>
                        </div>
                    </main>
                </ModalContainer>

            </Modal>

        </>


    )
}