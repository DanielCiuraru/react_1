import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    let btnClass = '';
    if(props.showPersons){
      btnClass = classes.Red;
    }
    return (
        <div className={classes.Cockpit}>
          <p>React!!!!</p>
          <button className={btnClass} onClick={props.clicked}>Toogle Persons</button>      
        </div>
    );
};

export default cockpit;