import React from 'react';
import './Header.css';

const HeaderTitle = () => {
	return (
		<div className='main-title'>
			<h2 className='title'>Lambda School</h2>
			<p className='address'>@LambdaSchool | {Date.now()}</p>
		</div>
	);
};

export default HeaderTitle;
