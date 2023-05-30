import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {Body} from "./site/Body";
import {NewComponent} from "./site/NewComponent";

function App() {

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]

    return (
        <div>
            <Header title="Hey BOB"/>
            <Body title="Hey man"/>
            <Footer/>
            <NewComponent topCars={topCars}/>

        </div>
    );
}

export default App;
