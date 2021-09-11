import React from 'react'

export default function Filter() {
    const names = ["hello", "World", "google"];
    const result = names.filter(name => name.includes('d'));
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const resultnum = nums.filter(num => num > 5);


    return (
        <div>
            <h2>Filters Strings</h2>
            {
                result.map(
                    (value, index) => <li>{value}</li>
                )
            }
            <h2>Filter numbers</h2>
            {
                resultnum.map(
                    (value) => <li>{value}</li>
                )
            }
        </div>
    )
}
