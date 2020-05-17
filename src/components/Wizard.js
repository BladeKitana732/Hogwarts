import React, { Component } from 'react';
import axios from 'axios';

console.log("wizard comp");
// console.log(process.env.REACT_APP_KEY);

const key = process.env.REACT_APP_KEY;

//referencing async/try/catch

console.log(`https://www.potterapi.com/v1/characters?key=${key}`);

export default class Wizard extends Component {
    // constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		info: []
	// 	};
	// }
 
    // async allInfo() {
	// 	try {
	// 		const allData = await axios.get(
	// 			`https://www.potterapi.com/v1/characters?key=process.env.REACT_APP_KEY`
	// 		);
            
    //         console.log(allData);
    //         console.log(allData.data);
            

	// 		this.setState({
	// 			info: allData.data,
    //         });
            
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

    // componentDidMount() {
	// 	this.allInfo();
	// }

    
    render() {
        return (
            <div>
                <h1>Wizard info Component</h1>
            </div>
        )
    }
}
