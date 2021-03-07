import React, { useState, useEffect } from 'react';

export function DashboardPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3003/')
      .then((response) => response.text())
      .then((responseNumber) => {
        setCount(parseInt(responseNumber));
      });
  }, []);

  const increment = () => {
    fetch('http://localhost:3003/increment')
      .then((response) => response.text())
      .then((responseNumber) => {
        setCount(parseInt(responseNumber));
      });
  };

  const decrement = () => {
    fetch('http://localhost:3003/decrement')
      .then((response) => response.text())
      .then((responseNumber) => {
        setCount(parseInt(responseNumber));
      });
  };

  return (
    <>
      <h1>Dashboard Page</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
}
