// props = { titleCallback: (), itemsCallback: () }
// TODO: Change the name to AccordionTypeSelector

import { useState, useEffect } from 'react';

function ListTypeSelector({titleCallback, itemsCallback, typeCallback}) {
	
	const [type, setType] = useState("blank");
	
	let title = "";
	let items = [];
	
	let rarity = [
		"Common",
		"Uncommon",
		"Rare",
		"Legend"
	];
	
	let types = [
		"Colorless",
		"Darkness",
		"Dragon",
		"Fairy",
		"Fighting",
		"Fire",
		"Grass",
		"Lightning",
		"Metal",
		"Psychic",
		"Water"
	];
	
	const TitleConditional = ( type == "rarity" ? title = "List of Rarities" : type == "types" ? title = "List of Types" : title );
	
	const ListConditional = ( type == "rarity" ? items = rarity.slice(0) : type == "type" ? items = types.slice(0) : items );
	
	const handleTypeSelection = (e) => {
		e.preventDefault();
		setType((type) => e.target.getAttribute("value"));
	}
	
	/**
		How to read the below:
			As a side effect of the type updating re-render the component and change the value of items then call the titleCallback and itemsCallback function
			
		Having this makes sure that the components relying on items from here get it hot and fresh when a component re-renders instead of lagging one step behind
	*/
	
	useEffect(() => {
		ListConditional;
		titleCallback(title);
		itemsCallback(items);
		typeCallback(type);
	}, [type]);
	
	return (
		<>
			<h1>Search Pokemon Cards by Selector</h1>
			<div className="dropdown">
				<a  className="btn btn-secondary dropdown-toggle" 
					href="#" 
					role="button" 
					data-bs-toggle="dropdown" 
					aria-expanded="false"
				>
					Search by:
				</a>
				<ul id="type-dropdown" className="dropdown-menu">
					<li><a onClick={ handleTypeSelection } className="dropdown-item" value="blank" href="#">Blank</a></li>
					<li><a onClick={ handleTypeSelection } className="dropdown-item" value="rarity" href="#">Rarity</a></li>
					<li><a onClick={ handleTypeSelection } className="dropdown-item" value="type" href="#">Types</a></li>
				</ul>
			</div>
		</>
	);
}

export default ListTypeSelector;