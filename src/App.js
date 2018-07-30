import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'daniel', age: 31},
      {name: 'suki', age: 7},
      {name: 'adi', age: 31},
    ]
  }

  switchNameHandler = (newName) => {
    //Dont do this: this.state.persons[0].name = 'Daniel';
    this.setState({    
      persons: [
        {name: newName, age: 31},
        {name: 'Suki', age: 7},
        {name: 'Adi', age: 31},
      ],
      showPersons: false
  });
  }

  togglePersonsHandler = () => {
    this.setState({    
      showPersons: !this.state.showPersons
    });
  }

  nameChangeHandler = (event) => {
    this.setState({    persons: [
      {name: event.target.value, age: 31},
      {name: 'Suki', age: 7},
      {name: 'Adi', age: 31},
    ]});
  }

  render() {
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
      <h1>React!!!!</h1>
      <button style={style} onClick={this.togglePersonsHandler}>Switch name</button>      
        {
          this.state.showPersons ? 
          <div>
            <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            changeName={this.nameChangeHandler}/>
            <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
            <Person 
            click={this.switchNameHandler.bind(this, 'Daniel')}
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}>I'm a dog</Person>
          </div>
          : null
        }
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React'));
  }
}

export default App;
