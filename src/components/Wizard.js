import React, { Component } from 'react';
import axios from 'axios';

// console.log("wizard comp");
// console.log(process.env.REACT_APP_KEY);

const key = process.env.REACT_APP_KEY;

// console.log(`https://www.potterapi.com/v1/characters?key=${key}`);

//referencing back to wine api

const workingLink = `https://www.potterapi.com/v1/characters/?key=${key}&name=`;


export default class Wizard extends Component {
    constructor(props){
        super(props)

        //this is supposed to take input of user when searching name and/or house and render back all info of that witch/wizard OR when typing in house to return all names of witches/wizards who belong to said house
        this.state = {
            input: '',
            infoBack: []
        }
        //binding the functions/methods made to render api information
        this.userInput=this.userInput.bind(this);
        this.handlingSubmit=this.handlingSubmit.bind(this);
    }

 
    
//  componentDidMount() {

//         axios.get(workingLink)
    
//         .then((result) => {
//             const allData = result.data;

//             console.log(allData);
    
//             this.setState({
//                 infoBack: allData
//             });
            
//         })

//         .catch((err) => {

//             console.log('Error has been computed', err)
    
//         });


//     }

    //was able to reference my Pawtastic project regarding forms to get this functionality: https://github.com/BladeKitana732/Pawtastic_form
    userInput = (event) => {

        this.setState({
            input: event.target.value,
        })

        // console.log(this.state.input);
      }

    //purpose of function is to handle the submit from user text to render proper info 
    handlingSubmit(e) {
        //realizing that api data is already being called had to comment out; need to make axios call w/in this functionality to render when text is submitted. not prior

        e.preventDefault();
        //case sensitive 
        axios.get(workingLink + this.state.input)

        .then(Response => {
            let infoRendered = Response.data;

            this.setState({
                infoBack: infoRendered
            })
            
            

            console.log(infoRendered);
        })

        // console.log(workingLink);
        // console.log(this.state.input);
        
    }

    
    render() {
        return (
            <div>
                <form onSubmit={this.handlingSubmit}>
                    <label>
                        Please enter name of witch or wizard (First and last with first letter capitalized for both. Ex: Harry Potter; Luna Lovegood, etc.)
                        <input type = "text" value={this.state.input} onChange = {this.userInput}/>

                    </label>
                    
                    <input type="submit" value="Submit" />
                </form>

                {this.state.infoBack.map((iterate) => {
                    return (
                        <div key = {iterate._id}>
                            {/* <h1>{iterate._id}</h1> */}
                            <h2>Character Name: {iterate.name} </h2>
                            <h3>House: {iterate.house}</h3> 
                            <p>Blood-status: {iterate.bloodStatus}</p>
                            <p>DeathEater: { iterate.deathEater ? "true" : "false" }</p>
                            <p>Dumbledores Army: { iterate.dumbledoresArmy ? "true" : "false" }</p>
                        
                            
                        </div>

                    )
                })}


                {/* {this.state.info.map(details =>
                <div key= { details.id }>
                <h2>{details.name}</h2>
                
                <h2>{details.house}</h2>
                
                </div> 
                
                )} */}
            </div>
        )
    }
}
