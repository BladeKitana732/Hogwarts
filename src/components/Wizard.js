import React, { Component } from 'react';
import axios from 'axios';

console.log("wizard comp");
// console.log(process.env.REACT_APP_KEY);

const key = process.env.REACT_APP_KEY;

console.log(`https://www.potterapi.com/v1/characters?key=${key}`);

//referencing back to wine api

const workingLink = `https://www.potterapi.com/v1/characters?key=${key}`

export default class Wizard extends Component {
    
 componentDidMount() {

        axios.get(workingLink)
    
        .then((result) => {
            const allData = result.data;

            console.log(allData);
    
            this.setState({
                info: allData.data
            });
            
        })

        .catch((err) => {

            console.log('Error has been computed', err)
    
        });


    }
    
    render() {
        return (
            <div>
                <h1>Wizard info Component</h1>
            </div>
        )
    }
}
