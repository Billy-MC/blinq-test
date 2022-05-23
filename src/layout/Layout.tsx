import { ReactNode } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
	children: ReactNode;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
`;

const Main = styled.main`
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Layout: React.FC<LayoutProps> = props => {
	const { children } = props;
	return (
		<Container>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Container>
	);
};

export default Layout;
