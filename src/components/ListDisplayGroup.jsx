// props = { items: [], heading: string, type: string }
// TODO: Change name to AccordionDisplayGroup

import { useState } from 'react';
import { useQuery } from 'react-query';
import TweetDisplay from './TweetDisplay';

function ListDisplayGroup({items, heading, type}) {
	
	const EmptyListConditional = ( items.length == 0 ? <h3>Hey! Choose a type idiot!</h3> : null );
	
	function createId(prefix, index) {
		return "" + prefix + "-" + index;
	}
	
	return (
		<>
			<h1>{heading}</h1>
			{ EmptyListConditional }
			<div className="accordion" id="accordionDisplay">
				{items.map(
					(item, index) => (
						<div key={item} className="accordion-item">
							<h2 className="accordion-header" id={createId("heading-",index)}>
								<button 
									key={item}
									className="accordion-button collapsed" 
									type="button"
									data-bs-toggle="collapse" 
									data-bs-target={createId("#collapse-",index)}
									aria-expanded="false"
									aria-controls={createId("collapse-",index)}
								>
									{item}
								</button>
							</h2>
							<div 
								id={createId("collapse-",index)} 
								className="accordion-collapse collapse" 
								aria-labelledby={createId("heading-",index)} 
								data-bs-parent="#accordionDisplay"
							>
								<div className="accordion-body">
									<div className="container mt-5 pt-4">
										<div className="row align-items-end mb-4 pb-2">
											<div className="col-md-8">
												<p>Here are 5 cards with that criteria</p>
											</div>
											<div className="col-md-4 mt-4 mt-sm-0 d-none d-md-block">
												<p>Filler text</p>
											</div>
										</div>
										<TweetDisplay selector={type} queryTerm={item} />
									</div>
								</div>
							</div>
						</div>
					)
				)}
			</div>
		</>
	);
}

export default ListDisplayGroup;