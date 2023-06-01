import React, {ChangeEvent, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

type FullInputType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputType) => {

    let [title, setTitle] = useState('')


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }


    return (
        <div>
            <input value={title} style={{marginLeft: '35px'}} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};