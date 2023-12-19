/**
	TODO: Change name to search generally because I'm going to keep switching around free apis
 */

import { useState } from 'react';

function TweetDisplay({selector, queryTerm}) {
	
	const [res, setResponse] = useState("");
	
	const retrieveTweets = async () => {
		const url = "https://twttrapi.p.rapidapi.com/search-top?query=" + {queryTerm};
		const encodedUrl = encodeURI(url);
		const response = await fetch("https://twttrapi.p.rapidapi.com/search-top?query=elonmusk");
		return response.data;
	}


	const getTweets = async () => {
		if (selector !== "blank") {
			const searchStuff = "&" + selector + "=" + queryTerm;
			const url = "https://api.pokemontcg.io/v2/cards?pageSize=5" + searchStuff;
			console.log(url);
			
			try {
				const response = await fetch(url);
				const results = await response.json();
				const status = response.status;
				console.log(results);
				console.log(status);
				console.log("this is the queryTerm: " + queryTerm);
				setResponse(results);
			} catch (error) {
				console.error(error);
			}
		}
	}
	
	return (
		<>
			<button onClick={ () => getTweets() }>Get Results</button>
			{res && (
				<ul className="list-group">
					{res.data.map((item) => (
						<li key={item.id} className="list-group-item">{item.name}</li>
					))}
				</ul>
			)}
		</>
	);
}

export default TweetDisplay;