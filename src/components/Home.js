import React from 'react';
import axios from 'axios';


const sortingHat = 'https://www.potterapi.com/v1/sortingHat';

// console.log(sortingHat);

function getHouse() {
    axios.get(sortingHat)

    .then(result => {
        let house = result.data;

        console.log(house);
    }
    )


}

export default function Home() {
    getHouse();
    return (
        <div>
            <h1>Click button to see your house!</h1>
            <button onClick= {getHouse}>Click Me</button>
        </div>
    )
}


