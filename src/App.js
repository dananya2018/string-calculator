import './App.css';
import { useState } from 'react';

function App() {

  const [ input, setInput ] = useState("");
  const [ result, setResult ] = useState(null);
  const [ error, setError ] = useState("")

  const calculate = (e) => {
    console.log('Calculate function')
  }

  return (
    <div className="App">
      <h1>String Calculator</h1>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter numbers'
      />
      <button onClick={calculate}>Calculate</button>
      {result !== null && <p>Result:{result}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
