import React from 'react';
import styled from 'styled-components';
import './Button.css';

const ActionButton = (props) => {
	return (
		<React.Fragment>
			<Wrapper>
				<ActionBtn>{props.text}</ActionBtn>
			</Wrapper>
		</React.Fragment>
	);
};

const Wrapper = styled.div`
	width: 75%;
	height: 75px;
`;

const ActionBtn = styled.button`
	width: 100%;
	color: #fff;
	background-color: #333;
	font-size: 4rem;
`;
