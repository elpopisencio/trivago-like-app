import styled from 'styled-components';

export default styled.div`
	border: 1px solid #b5b5b5;
	 width: 100%;
	 padding-top: .3rem;
	padding-left: .5rem;
	margin-right: ${({with_margin}) => with_margin ? 1 : 0}em;
	background-color: #fff;
	@media screen and (max-width: 780px) { 
		margin-left: 0;
	margin-bottom: ${({with_margin}) => with_margin ? 1 : 0}em;
	}
`;