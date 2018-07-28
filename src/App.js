import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>React!!!!</h1>
      <Person name="Daniel" age="31"/>
      <Person name="Suki" age="7">I'm a dog</Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React'));
  }
}

export default App;
