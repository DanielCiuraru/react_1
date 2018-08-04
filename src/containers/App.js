import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundry from './ErrorBoundry/ErrorBoundry';

class App extends Component {
  state = {
    persons: [
      { id: 0, name: 'daniel', age: 31},
      { id: 1, name: 'suki', age: 7},
      { id: 2, name: 'adi', age: 31},
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

  nameChangeHandler = (event, id) => {
    const person = {...this.state.persons.find((person) => person.id === id)};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[id] = person;
    this.setState({persons: persons});
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
        <Persons persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
        />
      );
    }

    return (
        <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}

        />
          {persons}
        </div>
    );
  }
}

export default App; //higher order component - wrapping component adds functionality to this component
