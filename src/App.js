import { useState  } from 'react';
import './App.css';

const Peeps = ['MIKA', 'ELI', 'DERYA', 'MARCIE', 'DANNY', 'HENRY', 'EMMA', 'LEILA', 'SEBASTIAN']

function App() {

  const peepMap = Peeps.map(peep => {
    return <button onClick={() => setPerson(peep)}>{peep}</button>
  })

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
      {peepMap}
     </div>
     <label for='custom'>
      NAME: 
      <input type={'text'} id='custom' onChange={handlePerson} />
     </label>
    </div>
  );
}

export default App;
