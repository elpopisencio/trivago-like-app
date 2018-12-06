import styled from 'styled-components';

export default styled.div`
	height: 180px;
	flex: 0 0 180px;
	display: block;
	background: url(${({ src }) => src}) no-repeat 0;
	background-size: contain;
	background-size: cover;
	background-position: center;
	margin-right: 1em;
	@media screen and (max-width: 780px) { 
		height: 150px;
		flex: 0 0 150px;
	}
`;