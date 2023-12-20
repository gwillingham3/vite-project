/**
	props = { selector: string, queryTerm: string }
	
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
			const url = "https://api.pokemontcg.io/v2/cards?pageSize=6" + searchStuff;
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
			<div className="row">
				<div className="col-md-8">
					<button onClick={ () => getTweets() }>Get Results</button>
				</div>
				<div className="col-md-4">
					<p>Filler text</p>
				</div>
				{res && (
					<div className="row">
						{res.data.map((item) => (
							<div key={item.id} className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
								<div className="result-card border-0 bg-light rounded shadow">
									<div className="card-body p-4">
										<span className="badge rounded-pill bg-primary float-md-end mb-3">{item.supertype}</span>
										<img src={item.images.small} className="rounded float-start" alt="Image of Pokemon card"/>
										<h5>{item.name}</h5>
										<div className="mt-3">
											<span className="text-muted d-block"><i className="fa fa-solid fa-t" aria-hidden="true"></i>{item.types[0]}</span>
											<span className="text-muted d-block"><i className="fa fa-solid fa-heart" aria-hidden="true"></i>{item.hp}</span>
										</div>
										<div className="mt-3">
											<a href={item.tcgplayer.url} className="btn btn-primary">View Details</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	);
}

export default TweetDisplay;