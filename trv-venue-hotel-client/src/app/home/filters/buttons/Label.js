import styled from 'styled-components';

export default styled.label`
text-align: center;
display: block;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
align-items: center;
	border: 1px solid #b5b5b5;
	display: inline-flex;
	height: 2.25em;
	padding-left: .5em;
	padding-right: .5em;
	text-decoration: none;
	font-size: .75rem;
	right: 1em;
	bottom: 1em;
${({ checked }) => {
		if (checked) {
			return (`
				background-color: #3f51b5;
				color: white;
			`)
		}
	}}
 `;