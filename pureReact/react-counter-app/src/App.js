import {useState} from "react"
import './App.css';

function App() {
  const [num,setNum]=useState(0)
  const addNum = () => {
    setNum(num+1)
  }
  const subNum = () => {
    setNum(num-1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter App
        </p>
        <div className="container">
        <button onClick={addNum} >+</button>
        <span>{num}</span>
        <button onClick={subNum} >-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
