import React from 'react';
//import classes from './Persons.css';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person,index)=> {
        return <Person
        click={()=> props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changeName={(event) => props.changed(event, person.id)} />
    });

export default persons;