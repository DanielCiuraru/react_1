import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  state = {
    persons: [
      {name: 'daniel', age: 31},
      {name: 'suki', age: 7},
      {name: 'adi', age: 31},
    ]
  }
  switchNameHandler = () => {
    //Dont do this: this.state.persons[0].name = 'Daniel';
    this.setState({    persons: [
      {name: 'Daniel', age: 31},
      {name: 'Suki', age: 7},
      {name: 'Adi', age: 31},
    ]});
  }

  render() {
    return (
      <div className="App">
      <h1>React!!!!</h1>
      <button onClick={this.switchNameHandler}>Switch name</button>      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I'm a dog</Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React'));
  }
}

export default App;
