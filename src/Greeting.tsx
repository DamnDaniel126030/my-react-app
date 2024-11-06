import React from "react";

interface GreetingProps{
    name : string, age : number;
}

function Greeting(props : GreetingProps){
    return <h2>Szia, {props.name}! Te már {props.age} éves vagy?</h2>
}

export default Greeting; 