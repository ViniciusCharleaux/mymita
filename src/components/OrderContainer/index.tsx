import {Container} from './styles';

interface OrdemContainerProps {
    name: string;
    data: string;
    pagamento: string;
}


export const OrderContainer:React.FC<OrdemContainerProps> = ({data, name, pagamento}) => {
    return (
        <Container>
            <div className='left_pedido'>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="60" fill="#40D627"/>
                <path d="M104 60L94.24 48.84L95.6 34.08L81.16 30.8L73.6 18L60 23.84L46.4 18L38.84 30.76L24.4 34L25.76 48.8L16 60L25.76 71.16L24.4 85.96L38.84 89.24L46.4 102L60 96.12L73.6 101.96L81.16 89.2L95.6 85.92L94.24 71.16L104 60ZM52.36 78.88L37.16 63.64L43.08 57.72L52.36 67.04L75.76 43.56L81.68 49.48L52.36 78.88Z" fill="white"/>
                </svg>
            </div>
            <div className='right_pedido'>
                <h6>pedido {name}</h6>
                <p className='historic-desc'>entregue em: {data}</p>
                <p className='historic-desc'>pagamento em: {pagamento}</p>
            </div>
        </Container>
    )
}