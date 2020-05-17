import React, { Component } from 'react';
import axios from 'axios';


//referencing wine api work


let hogwarts = axios.create({
    baseURL: "https://www.potterapi.com/v1/characters?key=REACT_APP_KEY"
})



export default class Wizard extends Component {

    state = {
        wizard: [],
       
    }

    constructor(){
        super();

        hogwarts.get('/') 

        .then((result) => {
            let info = result.data;

            console.log(info)

            this.setState({
                wizard: result.data
            })

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
