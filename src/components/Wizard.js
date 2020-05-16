import React, { Component } from 'react';
import axios from 'axios';

//referencing wine api work

let hogwarts = axios.create({
    baseURL: "https://www.potterapi.com/v1/sortingHat"
})



export default class Wizard extends Component {

    state = {
        house: []
    }

    constructor(){
        super();

        hogwarts.get('/') 

        .then((result) => {
            let info = result.data;

            console.log(info)
            
        })
    }

    render() {
        return (
            <div>
                <h1>Wizard info Component</h1>
            </div>
        )
    }
}
