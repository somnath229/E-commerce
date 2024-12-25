import React from 'react';
import { useState } from "react";

export default function MyButton({ count, setCount }) {
//   const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    console.log(count); 
  }
  return (
    <div>
      <button onClick={handleClick}>Click me {count} times</button>
    </div>
  );
}
