import './App.css';
import { useState } from 'react';

function App() {

  const [magicNumber, setMagicNumber] = useState({
    name: "Ananya",
    usn: "007",
    college: "Hogwards",
    home: "Hufflepuff"
  });


  const sampleFunction = () => {
    setMagicNumber({
      name: "Ananya",
      usn: "007",
      college: "Harvard",
      home: "Hufflepuff"
    })
  }

  return (
    <div className="App">
      <h1>{magicNumber.college}</h1>

      <button onClick={sampleFunction}>Say Hi!</button>
    </div>
  );
}

export default App;
