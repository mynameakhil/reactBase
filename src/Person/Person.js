import React from 'react'
import './Person.css'

const person=( props ) => {
    return(<div className = "Person">
         < p onClick = {props.click}> i am {props.name } and{props.age} old </p>
         <input type="text" onChange={props.changed} value={props.name}></input>
         <p>{props.children}</p>
         </div>);
    

}
export default person;