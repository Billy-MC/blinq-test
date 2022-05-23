import styled from 'styled-components';

import { color } from '@/styles/variables';

const StyledFooter = styled.footer`
	position: fixed;
	bottom: 0;
	border-top: 1px solid ${color.borderColor};
	padding: 10px;
	text-align: center;
	width: 100%;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<p>Broccoli & Co. is a great company</p>
			<p> &copy; by Broccoli & Co. All rights reserved.</p>
		</StyledFooter>
	);
};

export default Footer;
