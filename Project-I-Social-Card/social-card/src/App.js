import React from 'react';
import styled from 'styled-components';
import './App.css';
import './components/HeaderComponents/HeaderContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/Footer';

const App = () => {
	return (
		<AppStyle>
			<HeaderContainer />
			<CardContainer />
			<FooterContainer />
		</AppStyle>
	);
};

const AppStyle = styled.div`width: 450px;`;

export default App;
