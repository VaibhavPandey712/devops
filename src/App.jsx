import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="app-container">
      <h1>Basic React App</h1>
      <p>This is a simple React application created in your workspace.</p>
      <div className="button-row">
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </main>
  );
}

export default App;
