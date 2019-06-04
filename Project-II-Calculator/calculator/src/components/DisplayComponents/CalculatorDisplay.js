import React from 'react';
import styled from 'styled-components';
import './Display.css';

const CalculatorDisplay = () => {
	return (
		<Wrapper>
			<CalcInput type='text' placeholder='0' />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 75px;
	background-color: #333;
	color: #fff;
`;

const CalcInput = styled.input`
	width: 100%;
	height: 75px;
	font-size: 4rem;
	padding: .5rem;
	text-align: right;
	border: 1px solid white;
	background-color: #333;
	color: #fff;
`;

export default CalculatorDisplay;
