import React, {useState} from "react";
import Greeting from "./Greeting";

function App(){
  
  const [count, setcount] = useState(0);

  return(
    <>
      <div>
        <h1>Hello React!</h1>
        <p>This is my first React app.</p>
        <Greeting name="Dani" age={21}/>
        <h2>Counter: {count}</h2>
        <button onClick={() => {setcount(count + 1)}}>+1</button>
      </div>
    </>
  )
}

export default App