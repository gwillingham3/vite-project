import { useState, useEffect } from 'react';
import TestComponent from './TestComponent';
import ListTypeSelector from './components/ListTypeSelector';
import ListDisplayGroup from './components/ListDisplayGroup';
import reactLogo from './assets/react.svg';
import './App.css';

/**
	TODO: 
		- Make a ListGroup parent component for ListTypeSelector and ListDisplayGroup
		- Make a set of child components that communicate directly with each other instead of through their parent
	
	Some notes:
		- The ListTypeSelector and ListDisplayGroup components have one-way communication between each other by ListTypeSelector
		  passing the data up to their shared parent component and then the parent passes it down to ListDisplayGroup
		
 */

function App() {
	const [count, setCount] = useState(0);
	const [listTitle, setListTitle] = useState("");
	const [items, setItems] = useState([]);
	const [type, setType] = useState("blank");
	
	const listTitleCallback = (childData) => {
		setListTitle((listTitle) => childData);
	}
	
	const typeSelectorCallback = (childData) => {
		setItems((items) => childData);
	}
	
	const typeCallback = (childData) => {
		setType((type) => childData);
	}

	return (
		<>
			<div className="App">
				<div>
					<a href="https://vitejs.dev" target="_blank">
						<img src="/vite.svg" className="logo" alt="Vite logo" />
					</a>
					<a href="https://reactjs.org" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<h1>Vite + React</h1>
				<p>This is a quickly made set of React snippets to show that I maybe know React</p>
				<div className="card">
					<button onClick={() => setCount((count) => count + 1)}>
					  count is {count}
					</button>
					<p>
					  Edit <code>src/App.jsx</code> and save to test HMR
					</p>
				</div>
				<div className="card">
					<TestComponent />
				</div>
				<div className="card">
					<ListTypeSelector titleCallback={listTitleCallback} itemsCallback={typeSelectorCallback} typeCallback={typeCallback} />
				</div>
				<div className="card">
					<ListDisplayGroup items={items} heading={listTitle} type={type} />
				</div>
				<p className="read-the-docs">
				  Click on the Vite and React logos to learn more
				</p>
			</div>
		</>
	)
}

export default App;
