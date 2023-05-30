import React, {useState} from 'react';
import './App.css';

function App() {

   let [a, setA] = useState(1);

   const onClickHandler = () => {
       setA(++a);
       console.log(a)
   }

   const onClickHandler1 = () => {
       setA(0);
       console.log(a)
   }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>+1</button>
            <button onClick={onClickHandler1}>0</button>
        </div>
    );
}

export default App;
