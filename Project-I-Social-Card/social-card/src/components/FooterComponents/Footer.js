import React from 'react';
import styled from 'styled-components';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = () => {
	return (
		<FooterStyles className='footer-content'>
			<FontAwesomeIcon icon={faComment} />
			<FontAwesomeIcon icon={faRetweet} />
			<FontAwesomeIcon icon={faHeart} />
			<FontAwesomeIcon icon={faEnvelope} />
		</FooterStyles>
	);
};

const FooterStyles = styled.div`
	display: flex;
	justify-content: space-evenly;
	border: 1px solid lightgray;
	border-radius: 3px;
	padding: 20px;
	max-width: 95%;
	margin: 0 0 0 3rem;
`;

export default FooterContainer;
