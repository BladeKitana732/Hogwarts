import React, { Component } from 'react';
import axios from 'axios';


let apiLink = axios.create({
    //using id as base url for this api needs an id number before rendering any data from api itself.
    baseURL: "https://superheroapi.com/api/682168042639893/id"
})



export default class Home extends Component() {

    state = {
        
        heroImage: []

    }

    constructor(props){
        super(props);



        
    }









    return (
        <div>
            <h1>Welcome to our webpage!</h1>
            <br/>
            <h3>Why are you here?</h3>
            <br/>
            <p>
            You have landed where we make finding everything about your favorite superhero and/or villain as easy as breathing.  You got here by signing up or logging back in! Thanks for supporting our website to keep bringing you nothing but the best. 
            </p>


        </div>
    )
}
