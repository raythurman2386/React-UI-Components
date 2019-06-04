import React from 'react';
import styled from 'styled-components';

const ActionButton = (props) => {
	return (
		<Wrapper className='action-button'>
			<ActionBtn>{props.text}</ActionBtn>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 75%;
	margin: 0.1rem;
`;

const ActionBtn = styled.button`
	width: 100%;
	height: 75px;
	color: #333;
	background-color: #000;
	font-size: 4rem;
	text-align: center;
	border: none;
`;

export default ActionButton;
