import React, { Component } from 'react';
import axios from 'axios';

const sortingHat = 'https://www.potterapi.com/v1/sortingHat';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            house: ''
        }


    }


    getHouse= () => {
        axios.get(sortingHat)

        .then(Response => {
            let result = Response.data;
        
            console.log(result);
        
        })
    }
    render() {
        return (
            <div>
                <h1><strong>Your House is:</strong>{this.state.house}</h1>
            </div>
        )
    }
}



