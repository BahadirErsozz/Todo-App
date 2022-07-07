import React, { useState } from "react";
import Form from "./components/Form/Form";

function App() {
 const [count, setCount] = useState(0);
  const handleClick = () => {
    return (
      setCount(count + 1)
    );
  }
  return (
    <div className="App">
      <p> {count}</p>
      <Form addItem={handleClick}></Form> 
    </div>
  );
}

export default App;
