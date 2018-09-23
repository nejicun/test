import React, {Component} from 'react';


class Item extends Component {
	
	state = {
		isOpen: true,
		isQw: false
	}

	render() {
 		const {article} = this.props	
		const body = <div  className="flex-box" style={article.completed === true ? {color:'red'} : {color:'blue'} }>{article.userId}.{article.id}.{article.title}</div> 
		const knopka = <div className ="flex-box2"><button onClick={(e) => this.handleClick(e )} className="b2">{article.completed === true ? 'completed:true' : 'completed:false' }</button></div>
		return (
				<span className="my-flex-container first">
				{body}
				{knopka}
				</span>				
		)
	}

	handleClick() {
    	console.log('completed:', !this.props.article.completed);  
		this.props.article.completed= !this.props.article.completed;
    		this.setState({	
				})
  				  }
}




export default Item;
