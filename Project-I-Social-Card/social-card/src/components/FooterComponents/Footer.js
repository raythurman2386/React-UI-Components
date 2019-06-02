import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = () => {
	return (
		<div className='footer-content'>
			<FontAwesomeIcon icon={faComment} />
			<FontAwesomeIcon icon={faRetweet} />
			<FontAwesomeIcon icon={faHeart} />
			<FontAwesomeIcon icon={faEnvelope} />
		</div>
	);
};

export default FooterContainer;
