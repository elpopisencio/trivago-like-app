import styled from 'styled-components';

export default styled.div`
	height: 180px;
	flex: 0 0 180px;
	display: block;
	background: url(${({ src }) => src}) no-repeat 0;
	background-size: contain;
	background-size: cover;
    background-position: center;
`;