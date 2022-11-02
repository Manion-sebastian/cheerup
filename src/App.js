import { useState, useEffect  } from 'react';
import './App.css';

const Peeps = ['MIKA', 'ELI', 'DERYA', 'MARCIE', 'DANNY', 'HENRY', 'EMMA', 'LEILA', 'SEBASTIAN', 'MEL']
const sortedPeeps = Peeps.sort()


function App() {
  
  const peepMap = sortedPeeps.map(peep => {
    return <button onClick={() => setPerson(peep)}>{peep}</button>
  })
  
  const [person, setPerson] = useState('')
  // useEffect(() => {
  //   setPerson(person.toUpperCase())
  // }, [person])
  const handlePerson = e => {
    setPerson(e.target.value.toUpperCase())
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
