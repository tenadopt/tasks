import React from 'react';
import './App.css';

function App() {

    // const myFirstSubscriber = () => {
    //     console.log("Hello I'm Vasya")
    // }
    //
    // const mySecondSubscriber = () => {
    //     console.log("Hello I'm Ivan")
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(`Hello. My name is ${name}!`)
    // }

    const foo1 = () => {
        console.log('Uraaaaa')
    }

    const foo2 = (n: number) => {
        console.log(n)
    }

    return (
        <div>
            {/*<button onClick={()=>onClickHandler('Ivan')}>MyYoutubeChannel-2</button>*/}
            {/*<button onClick={()=>onClickHandler('Vasya')}>MyYoutubeChannel-1</button>*/}
            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>
        </div>
    );
}

export default App;
