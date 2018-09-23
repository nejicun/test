import React from 'react';
import Article from './Article'

export default function List ({articles}) {

	return (
		<ul>
			<li><Article article = {articles[0]}/></li>
		</ul>
	)

}




/*
export default function List ({articles}) {
		const artEl = articles.map(article =>
			<li key = {article.id}><Article article = {article}/></li>
		
	return  (
		<ul>
			{artEl}
		</ul>
	)
}
*/


