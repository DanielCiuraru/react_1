import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';

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
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
              return  <ErrorBoundry key={person.id}>
                        <Person 
                          click={(index) => this.deletePersonHandler(index)}
                          name={person.name} 
                          age={person.age}                  
                          changeName={(event) => this.nameChangeHandler(event, person.id)}
                        />
                      </ErrorBoundry>;
            })}
        </div>
      );
      style.backgroundColor = 'grey';
      btnClass = classes.Red;
    }

    return (
        <div className={classes.App}>
          <p>React!!!!</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>Toogle Persons</button>      
          {persons}
        </div>
    );
  }
}

export default App; //higher order component - wrapping component adds functionality to this component
