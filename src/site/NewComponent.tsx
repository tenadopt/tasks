import React from 'react';

type CarsType = {
    manufacturer: string
    model: string
}

type NewComponentType = {
    topCars: CarsType[]
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            {props.topCars.map(el =>
                <div>
                    <span>{el.manufacturer}</span><br/>
                    <span>{el.model}</span>
                </div>)}
        </div>
    );
};