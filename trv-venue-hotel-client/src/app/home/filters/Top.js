import styled from 'styled-components';

export default styled.div`
	max-width: 980px;
	padding: 1em 0;
	display: flex;
	@media screen and (max-width: 780px) {
      flex-direction: column;
}
`;