import React from 'react';
import Item from './Item'

export default function List ({items}) {
		const ArtEl = items.map(item =>
			<li key= {item.id}><Item item= {item}/></li>
		)
	return (
		<ul className="b1">
			{ArtEl}
		</ul>
	)

}






