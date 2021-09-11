import React from 'react'

export default function Arr() {
    const arr = ["node1", "node2", "node3"];

    const arrObj = [
        {
            name: 'praveen',
            age: '25'
        },
        {
            name: 'google',
            age: '2445'
        },
        {
            name: 'hello',
            age: '245'
        }
    ];
    return (
        <div>
            <p>Array Of values</p>
            {
                arr.map(
                    (value, index) => <li key={index}>{value}</li>
                )
            }
            <p>Array Of Objects</p>
            {
                arrObj.map(
                    (value, index) => <li key={index}>{value.name} : {value.age}</li>
                )
            }
        </div>
    )
}
