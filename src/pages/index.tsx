import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';
import Modal from '@/components/Modal';

const Container = styled.div`
	text-align: center;
`;

const Title = styled.h1`
	font-size: 36px;
`;

const Context = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Home: NextPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const ModalHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Container>
			<Head>
				<title>Broccoli & Co.</title>
			</Head>
			<Context>
				<Title>
					A Batter way <br />
					to enjoy every day.
				</Title>
				<p>Be the first to know when we launch.</p>
				<Button width="200px" onClick={ModalHandler}>
					Request an invite
				</Button>

				{isOpen && <Modal onOpen={ModalHandler} />}
			</Context>
		</Container>
	);
};

export default Home;
