import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Container, ModalContainer } from "./styles";
import { Adress } from "../adress";
import images from "../../constants/images";

interface Data {
  data: string[];
  size: string;
}


interface PaymentProps {
  isOpen: boolean;
  onRequestClose: () => void;
  data: Data
}

export const Payment: React.FC<PaymentProps> = ({ isOpen, onRequestClose, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  useEffect(() => {

    if(data && isOpen){    
      setSelectedOptions(data.data)
    }
    
},[data,isOpen])

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
          },
        }}
      >
        <ModalContainer>
          
          <main>
          <div className="img-pacote">
              <img src={images.bag}></img>
            </div>
            <div className="conteudo">
              <div className="titulo">Selecione a forma de pagamento:</div>
              <div className="opcoes-img">
                <div className="img-marmita">
                    <img src={images.marmitinha} alt="" />
                </div>
                <div className="opcoes-marmita">
                  {selectedOptions?.map((opcao, index) => (
                    <label key={index} htmlFor="">1x {opcao}</label>
                  ))}
                </div>
              </div>

              <div className="opcao-pagamento">
                <div className="col1">
                  <p>
                    <input
                      type="radio"
                      name="pagamento"
                      className="radio-pagamento"
                    ></input>
                    <label htmlFor="cartao">cartão</label>

                    <input
                      type="radio"
                      name="pagamento"
                      className="radio-pagamento"
                    ></input>
                    <label htmlFor="pix">pix</label>
                  </p>
                </div>
                <div className="col1">
                  <p>
                    <input
                      type="radio"
                      name="pagamento"
                      className="radio-pagamento"
                    ></input>
                    <label htmlFor="dinheiro">dinheiro</label>
                    

                    <input
                      type="radio"
                      name="pagamento"
                      className="radio-pagamento"
                    ></input>
                    <label htmlFor="outro">outro</label>
                  </p>
                </div>
              </div>

              <div className="valor">
                <label>valor:</label>
                <label className="valor-total">
                  {
                  data?.size === "Pequena" ? "R$ 10,00" : data.size === "Media" ? "R$ 15,00" : "R$ 20,00"
                  }
                </label>
              </div>

              <div className="botoes">
                <button className="voltar" onClick={() => onRequestClose()}>
                  &lt; voltar
                </button>
                <button className="avancar" onClick={() => setIsModalOpen(true)}>
                  
                    avançar &gt;
                </button>
              </div>
            </div>
          </main>
          <Adress
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
          />
        </ModalContainer>
      </Modal>
    </>
  );
};
