import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
   return  (
   <div className="Person">
        <p onClick={props.click}>I'm {props.name}! I'm {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" value={props.name} onChange={props.changeName}/>
   </div>
   );

  
}

export default Radium(person);