import Modal from 'react-modal';
import images from "../../constants/images";
import { Container, ModalContainer } from './styles';
import {cadastraPedido, Pedido} from '../../interfaces/pedido';

import {useAuth} from '../../hooks/auth'
import {useToast} from '../../hooks/toast';

import { useNavigate } from "react-router-dom";

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
    const {toastTopSuccess} = useToast();

    const navigate = useNavigate();

    const handlePedido = async() => {

        if(user){
            const res = await cadastraPedido({
                pedido: data.data,
                tamanho: data.size,
                valor: data.price,
                pagamento: data.payment,
                cliente:{
                    email: user.Contato,
                    nome: user.Nome,
                    userKey: user.Key,
                    endereco: "Rua dos Bobos, 0"
                }
            });

            if(res === 1){
                toastTopSuccess('Pedido realizado com sucesso!');
                navigate('/dashboard');
            }
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