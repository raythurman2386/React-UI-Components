import React from 'react';
import styled from 'styled-components';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';
import './Button.css';

const ButtonContainer = () => {
	return (
		<React.Fragment>
			<Wrapper className='button-container'>
				<ActionButton text='CLEAR' />
				<NumberButton className='red-button' text='/' />
			</Wrapper>
			<Wrapper>
				<NumberButton text='7' />
				<NumberButton text='8' />
				<NumberButton text='9' />
				<NumberButton className='red-button' text='*' />
			</Wrapper>
			<Wrapper>
				<NumberButton text='4' />
				<NumberButton text='5' />
				<NumberButton text='6' />
				<NumberButton className='red-button' text='-' />
			</Wrapper>
			<Wrapper>
				<NumberButton text='1' />
				<NumberButton text='2' />
				<NumberButton text='3' />
				<NumberButton className='red-button' text='+' />
			</Wrapper>
			<Wrapper>
				<ActionButton text='0' />
				<NumberButton className='red-button' text='=' />
			</Wrapper>
		</React.Fragment>
	);
};

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	margin: 0.1rem;
`;

export default ButtonContainer;
