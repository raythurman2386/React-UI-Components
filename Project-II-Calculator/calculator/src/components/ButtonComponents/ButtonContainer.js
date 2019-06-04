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
		</React.Fragment>
	);
};

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	margin: 0.1rem;
`;

export default ButtonContainer;
