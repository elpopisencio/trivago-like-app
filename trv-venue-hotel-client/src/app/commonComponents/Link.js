import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
	align-items: center;
	border: 1px solid #b5b5b5;
	display: inline-flex;
	height: 2.25em;
	padding-left: .5em;
	padding-right: .5em;
	text-decoration: none;
	font-size: .7rem;
	margin-left: 1em;
	background-color: #fff;
	@media screen and (max-width: 780px) { 
		margin-left: 0;
		margin-top: 1em;
	}
`;