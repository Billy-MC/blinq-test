import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ModalContainer from './components/ModalContainer';

interface ModalProps {
	onOpen: () => void;
}

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 20;
	background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOverlay = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	padding: 16px;
	padding-bottom: 30px;
	border-radius: 14px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 30;
`;

const Modal: React.FC<ModalProps> = props => {
	const { onOpen } = props;
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={onOpen} />,
				document.getElementById('overlays') as HTMLElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>
					<ModalContainer onClose={onOpen} />
				</ModalOverlay>,
				document.getElementById('overlays') as HTMLElement
			)}
		</>
	);
};
export default Modal;
