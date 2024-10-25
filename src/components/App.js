import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // Initialize state with useState hook, starting the counter at 0
  const [count, setCount] = useState(0);

  // Event handler for button click to increment the counter
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={handleClick}>Click me</button>
        <p>Button clicked {count} times</p>
    </div>
  );
}

export default App;
