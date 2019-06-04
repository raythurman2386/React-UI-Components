import React from 'react';
import styled from 'styled-components';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import './App.css';

const App = () => {
	return (
		<AppWrapper className='App'>
			<CalculatorDisplay />
			<ActionButton text='CLEAR' />
		</AppWrapper>
	);
};

const AppWrapper = styled.div`
	max-width: 300px;
	margin: auto;
	background-color: #ddd;
	border: 1px solid #333;
	padding: 0.2rem;
`;

export default App;
