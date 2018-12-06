import styled from 'styled-components';

export default styled.div`
	background-color: ${props => props.theme['background-color']};
	box-shadow: 0 0 10px ${props => props.theme['background-color']};
	padding: 1px;
	min-height: 100vh;
`;