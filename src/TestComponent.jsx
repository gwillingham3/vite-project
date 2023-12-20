import { useState } from 'react';

function TestComponent() {
	const [name, setName] = useState("");
	
	function updateName() {
		setName((name) => document.getElementById("name").value);
	}

	return (
		<>
			<div className="aClass">
				<h1>What's your name?</h1>
				<div className="input-holder">
					<label className="input-label">Type your name here: </label>
					<input type="text" id="name" onKeyUp={() => updateName()}/>
				</div>
				
				<div className="displayHolder">
					<h2>Hello, {name}!</h2>
				</div>
			</div>
		</>
	);
}

export default TestComponent;