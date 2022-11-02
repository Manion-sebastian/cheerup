import { useState  } from 'react';
import './App.css';


function App() {
  const [person, setPerson] = useState('')
  const handlePerson = e => {
    setPerson(e.target.value)
  }
  return (
    <div className="App">
     <h1>
      {`CHEER UP ${person}!`}
     </h1>
     <div>
      <button onClick={() => setPerson('MIKA')}>MIKA</button>
      <button onClick={() => setPerson('ELI')}>ELI</button>
      <button onClick={() => setPerson('DERYA')}>DERYA</button>
      <button onClick={() => setPerson('MARCIE')}>MARCIE</button>
      <button onClick={() => setPerson('HENRY')}>HENRY</button>
      <button onClick={() => setPerson('DANNY')}>DANNY</button>
      <button onClick={() => setPerson('EMMA')}>EMMA</button>
      <button onClick={() => setPerson('LEILA')}>LEILA</button>
     </div>
     <label for='custom'>
      NAME: 
      <input type={'text'} id='custom' onChange={handlePerson} />
     </label>
    </div>
  );
}

export default App;
