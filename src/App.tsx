import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    let [title, setTitle] = useState('')
    console.log(title)

    const addMessage = (title: string) => {
        const newMessage = {message: title}
            setMessage([newMessage, ...message])
    }

    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }


    return (
        <div>
            <Input title={title} setTitle={setTitle}/>
            <Button name={"+"} callback={onClickButtonHandler}/>
            <ul>
                {message.map(el => (
                    <div>
                        {el.message}
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default App;
