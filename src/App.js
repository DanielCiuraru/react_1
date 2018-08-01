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

  deletePersonHandler = (index) => {
    //const persons = this.state.persons.slice(); //copys the full array (otherwise its a reference)
    const persons = [...this.state.persons]; //this also copys the array by spreading the items in a new array
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = (index) => {
    this.setState({    
      showPersons: !this.state.showPersons
    });
  }

  nameChangeHandler = (event) => {
    this.setState({    persons: [
      { id: 0, name: event.target.value, age: 31},
      { id: 1, name: 'Suki', age: 7},
      { id: 2, name: 'Adi', age: 31},
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

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          { this.state.persons.map((person, index)=>{
              return <Person 
              click={(index) => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              />;
            })}
        </div>
      );
    }
    
    return (
      <div className="App">
      <h1>React!!!!</h1>
      <button style={style} onClick={this.togglePersonsHandler}>Toogle Persons</button>      
      {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React'));
  }
}

export default App;
