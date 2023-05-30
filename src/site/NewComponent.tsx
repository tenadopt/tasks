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
        <>
            {props.topCars.map((el, index) =>
                <table>
                <tr>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                    <tr>
                        <td key={index}>{el.manufacturer}</td>
                        <td key={index}>{el.model}</td>
                    </tr>
                </table>
            )}
        </>
    );
};