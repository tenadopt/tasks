import React, {useState} from 'react';
import './App.css';
import {NewComponentFilter} from "./components/NewComponentFilter";

export type FilterType = 'All'|'Dollars'|'RUBLS'


function App() {

   const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ]);

   const [filterValue, setFilter] = useState<FilterType>('All')

   const onClickFilterHandler = (filterValue: FilterType) => {
       setFilter(filterValue)
   }

    let currentMoney = money;

    if (filterValue === 'Dollars') {
        currentMoney = money.filter(el=>el.banknots === filterValue)
    }

    if (filterValue === 'RUBLS') {
        currentMoney = money.filter(el=>el.banknots === filterValue)
    }

    return (
        <>
            <NewComponentFilter currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </>
    );
}

export default App;
