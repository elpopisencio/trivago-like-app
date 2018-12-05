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
	const user = JSON.parse(localStorage.getItem("user"));
	return (
		<Container>
			<Brand to='/'>
				fake inc.
			</Brand>
			<User>
				{user ? user.user_name : ''}
			</User>
		</Container>
	)
}