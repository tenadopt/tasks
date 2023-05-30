import React from 'react';
import {FilterType} from "../App";

type CurrencyType = {
    banknots: string
    value: number
    number: string
}

type NewComponentFilterType = {
    currentMoney: CurrencyType[]
    onClickFilterHandler: (filterValue: FilterType)=>void
}

export const NewComponentFilter = (props: NewComponentFilterType) => {

    return (
        <div>
            {props.currentMoney.map((el, index) => (
                <ul key={index}>
                    <span>{el.banknots}</span>
                    <span>{el.value}</span>
                    <span>{el.number}</span>
                </ul>
            ))}
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={() => props.onClickFilterHandler('RUBLS')}>Rubles</button>
            </div>
        </div>
    );
};