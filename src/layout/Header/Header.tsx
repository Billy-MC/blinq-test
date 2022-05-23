import styled from 'styled-components';

import { color } from '@/styles/variables';

const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	border-bottom: 1px solid ${color.borderColor};
	padding-left: 150px;
	width: 100%;
`;

const Header = () => {
	return (
		<StyledHeader>
			<h2>Broccoli & Co.</h2>
		</StyledHeader>
	);
};
export default Header;
