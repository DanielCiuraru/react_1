import React from 'react';
import classes from './Person.css';

const person = (props) => {
    const rnd = Math.random();
    if(rnd > 0.7){
        throw new Error('Something bad');
    }
    return  (
        <div className={classes.Person}>
                <p onClick={props.click}>I'm {props.name}! I'm {props.age} years old</p>
                <p>{props.children}</p>
                <input type="text" value={props.name} onChange={props.changeName}/>
        </div>
    ); 
}

export default person;