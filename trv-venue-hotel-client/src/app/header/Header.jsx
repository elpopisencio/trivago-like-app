import React from 'react';
import styled from 'styled-components';
import Brand from './Brand';
import User from './User';

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 56px;
	position: relative;
	margin: auto;
	max-width: 980px;
`;

export default function Header() {
	return (
		<Container>
			<Brand to='/'>
				fake inc.
			</Brand>
			<User>
				pepe123
			</User>
		</Container>
	)
}