import React from 'react';
import styled from 'styled-components';
import './Display.css';

const CalculatorDisplay = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<CalcInput type='text' placeholder='0' />
			</Wrapper>
		</React.Fragment>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 75px;
`;

const CalcInput = styled.input`
	width: 100%;
	height: 75px;
	font-size: 4rem;
	padding: .5rem;
	background-color: #333;
	color: #fff;
	text-align: right;
	border: 1px solid white;
`;

export default CalculatorDisplay;
