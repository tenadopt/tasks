import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";

function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    const addMessage = (title: string) => {
        const newMessage = {message: title}
            setMessage([newMessage, ...message])
    }

    return (
        <div>
            <FullInput addMessage={addMessage}/>
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
