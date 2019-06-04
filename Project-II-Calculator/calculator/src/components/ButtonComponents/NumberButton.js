import React from 'react';
import styled from 'styled-components';
import './Button.css';

const NumberButton = (props) => {
	return (
		<Wrapper className='number-button'>
			<NumBtn>{props.text}</NumBtn>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 25%;
	margin: 0.1rem;
`;

const NumBtn = styled.button`
	width: 100%;
	height: 75px;
	color: #000;
	background-color: #333;
	font-size: 4rem;
	text-align: center;
	border: none;
`;

export default NumberButton;
