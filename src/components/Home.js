import React, { Component } from 'react';
import axios from 'axios';
import sortingHatImg from './sortingHatImg.jpeg';

const sortingHat = 'https://www.potterapi.com/v1/sortingHat';

export default class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            house: ''
        }
        //binding function/method
        this.getHouse = this.getHouse.bind(this);

    }


    getHouse= () => {
        axios.get(sortingHat)

        .then(Response => {
            let result = Response.data;
        
            // console.log(result);

            this.setState({
                house: result
            })
        
        })


        .catch((err) => {
            console.error('Computed error: ', err)
        })
    }
    render() {
        return (
            <div>
                <h1>Click sorting hat to get your house!</h1>
                <img src= {sortingHatImg} alt= "sorting hat" onClick = {this.getHouse} style = {{width:400, height:400}}/>

                {/* <button onClick = {this.getHouse}>Click me</button> */}
                <h1><strong>Your House is:</strong> {this.state.house}</h1>
            </div>
        )
    }
}



