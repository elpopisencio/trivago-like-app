import styled from 'styled-components';

export default styled.label`
text-align: center;
font-weight: bold;
display: block;
position: relative;
padding: 0.5em 30px 0.5em 10px;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
${({ checked }) => {
		if (checked) {
			return (`
				background-color: blue;
				color: white;
			`)
		}
	}}
 `;