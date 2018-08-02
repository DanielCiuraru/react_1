import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
        <div>
          { this.state.persons.map((person, index)=>{
              return <Person 
              click={(index) => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changeName={(event) => this.nameChangeHandler(event, person.id)}
              />;
            })}
        </div>
      );
      style.backgroundColor = 'grey';
    }

    //let classes = ['red', 'bold'].join(' '); //join the css classes with space in-between
    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push('red');
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push('bold');
    }

    return (
        <div className={classes.App}>
          <p className={assignedClasses.join(' ')}>React!!!!</p>
          <button style={style} onClick={this.togglePersonsHandler}>Toogle Persons</button>      
          {persons}
        </div>
    );
  }
}

export default App; //higher order component - wrapping component adds functionality to this component
