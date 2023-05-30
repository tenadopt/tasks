import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    const button1Foo = (subscriber: string, age: number)=>{
        console.log(subscriber, age)
    }
    const button2Foo = (subscriber:string, age: number)=>{
        console.log(subscriber, age)

    }

    const button3Foo = ()=>{
        console.log("I'm stupid button")

    }

    return (
        <div>
            <Button name={'MyYoutubeChannel-1'} callback={()=>button1Foo("I'm Vasya", 21)}/>
            <Button name={'MyYoutubeChannel-2'} callback={()=>button2Foo("I'm Igor", 21)}/>
            <Button name={'MyYoutubeChannel-3'} callback={button3Foo}/>
        </div>
    );
}

export default App;
