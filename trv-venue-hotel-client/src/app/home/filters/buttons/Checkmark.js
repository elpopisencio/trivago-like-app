import styled from 'styled-components';

export default styled.span` 
	position: absolute;
	top: 0;
	right: 0;
	height: 25px;
	width: 25px;

	${({checked}) => {
		if(checked){
			return (
				`:after {
					content: "";
					position: absolute;
					display: none;
					display: block;
					right: 10px;
					top: 10px;
					width: 5px;
					height: 10px;
					border: solid white;
					border-width: 0 3px 3px 0;
					-webkit-transform: rotate(45deg);
					-ms-transform: rotate(45deg);
					transform: rotate(45deg);
				}`
			)
		}
	}
	}
 `;