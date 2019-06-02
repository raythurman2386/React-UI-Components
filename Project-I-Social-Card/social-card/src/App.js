import React from 'react';
import './App.css';
import './components/HeaderComponents/HeaderContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/Footer';

const App = () => {
	return (
		<div>
			<HeaderContainer />
			<CardContainer />
			<FooterContainer />
		</div>
	);
};

export default App;
