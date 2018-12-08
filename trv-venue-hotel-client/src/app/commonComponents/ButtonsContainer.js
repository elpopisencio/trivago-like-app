import styled from 'styled-components';

export default styled.div`
	position: absolute;
	right: 1em;
	bottom: 1em;
	border-top: 1px solid #b5b5b5;
    padding: .6em 0 0 .6em;
    border-left: 1px solid #b5b5b5;
	background-color: #fff;
	@media screen and (max-width: 780px) { 
		display: flex;
		flex-direction: column;
	}
`;