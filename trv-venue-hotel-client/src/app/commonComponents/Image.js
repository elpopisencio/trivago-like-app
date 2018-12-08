import styled from 'styled-components';

export default styled.div`
	height: ${({ show_more }) => show_more ? 190 : 100}px;
	flex: 0 0 ${({ show_more }) => show_more ? 190 : 100}px;
	display: block;
	background: url(${({ src }) => src}) no-repeat 0;
	background-size: contain;
	background-size: cover;
	background-position: center;
	margin-right: 1em;
	@media screen and (max-width: 780px) { 
	height: ${({ show_more }) => show_more ? 150 : 100}px;
	flex: 0 0 ${({ show_more }) => show_more ? 150 : 100}px;

	}
`;