// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { CardList } from "./containers/card-list/card-list.components"

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters:[]
    }
  }
  
  componentDidMount(){
   
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(user => this.setState({monsters:user}))
    
  }
  render() {
    return (
      <div className="App">
        <CardList user="Abbas">
          <h1>Abbas</h1>
        </CardList>
        {
          this.state.monsters.map(monster=>(
            <h1 key={monster.id}>{ monster.name }</h1>
          ))
        }
      </div>
    );
  }
}

export default App;
