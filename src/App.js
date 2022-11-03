// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Counter from './Components/counter';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App"  >
      <div class="container ">
      <button type="button" class="btn btn-outline-success mx-3 " onClick={
        ()=>{
          setCount(count+1);
          console.log(count)
        }
      }><i class="fa fa-plus mx-2" aria-hidden="true"> </i>Addition</button>
      <button type="button" class="btn btn-outline-danger" onClick={
        ()=>{
          setCount(count-1);
          console.log(count)
        }
      }><i class="fa fa-minus mx-2" aria-hidden="true"> </i>subtract</button>
      {/* <h1>Counter:{count}</h1> */}
      <Counter  count={count}/>
      {/* props */}
      </div>
    </div>
  );
}

export default App;
