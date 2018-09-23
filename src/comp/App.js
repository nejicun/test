import React, {Component} from 'react';
import List from './list'
import './style/style.css'

class App extends Component {

	state = {
      isLoaded: false,
      items: []
	}
	  
	  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
               });
              }
            )     
  }

  	render() {
      const { isLoaded, items } = this.state;
        if  (!isLoaded) {
          return <div>Loading...</div>;
          } 
        else  {
          return (
     	  <div className="my-flex-container">
			    <div>
            <h1>Список:</h1>
          </div>
			   <div>  
            <List items ={items}/>
         </div>
		    </div>
      );
    }
  }
}



export default App;


