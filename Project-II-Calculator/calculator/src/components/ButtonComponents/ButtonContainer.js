import React from 'react';
import styled from 'styled-components';
import ActionButton from './ActionButton';
import NumberButton from './NumberButton';

const ButtonContainer = () => {
	return (
		<React.Fragment>
			<Wrapper className='button-container'>
				<ActionButton text='CLEAR' />
				<NumberButton text='/' />
			</Wrapper>
			<Wrapper>
				<NumberButton text='7' />
				<NumberButton text='8' />
				<NumberButton text='9' />
				<NumberButton text='*' />
			</Wrapper>
			<Wrapper>
				<NumberButton text='4' />
				<NumberButton text='5' />
				<NumberButton text='6' />
				<NumberButton text='-' />
			</Wrapper>
			<Wrapper>
				<NumberButton text='1' />
				<NumberButton text='2' />
				<NumberButton text='3' />
				<NumberButton text='+' />
			</Wrapper>
			<Wrapper>
				<ActionButton text='0' />
				<NumberButton text='=' />
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
