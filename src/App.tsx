import './App.less';
import React from 'react';
import { Button } from 'antd';

function App() {
	const a = () => {
		console.log(1);
	};
	const n = {
		p: 1,
	};
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Button type="primary">Button</Button>
			</header>
		</div>
	);
}

export default App;
