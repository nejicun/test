import React, {Component} from 'react';


class Item extends Component {
	
	
	render() {
 		const {item} = this.props	
		const body = <div  className="flex-box" style={item.completed === true ? {color:'red'} : {color:'blue'} }>{item.userId}.{item.id}.{item.title}</div> 
		const knopka = <div className ="flex-box2"><button onClick={(e) => this.handleClick(e )} className="b2">{item.completed === true ? 'completed:true' : 'completed:false' }</button></div>
		return (
				<span className="my-flex-container first">
				{body}
				{knopka}
				</span>				
		)
	}
	handleClick() {
    	console.log('completed:', !this.props.item.completed);  
		this.props.item.completed= !this.props.item.completed;
    		this.setState({	
				})
 	}
}




export default Item;
