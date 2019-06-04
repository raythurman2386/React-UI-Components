import React from 'react';
import styled from 'styled-components';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
	return (
		<AppWrapper>
			<CalculatorDisplay />
		</AppWrapper>
	);
};

const AppWrapper = styled.div`
	max-width: 300px;
	margin: auto;
	background-color: #333;
`;

export default App;
