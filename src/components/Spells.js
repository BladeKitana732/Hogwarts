import React,{Component} from 'react';
import axios from 'axios';


const key = process.env.REACT_APP_KEY;

const spells = `https://www.potterapi.com/v1/spells/?key${key}`;

export default class Spell extends Component {
    constructor(props){
        super(props)

        this.state = {
            input:"",
            infoBack:[],
        }
        this.userInput=this.userInput.bind(this);
        this.handlingSubmit=this.handlingSubmit.bind(this);
    
    }

    userInput = (event) => {
        
        this.setState({
            input: event.target.value,
        })

         console.log(this.state.input);
      }



    handlingSubmit(e) {
        console.log("whatsds")
        e.preventDefault();
        
        axios.get(spells + this.state.input)
        
        .then(Response => {
            let infoRendered = Response.data;
            console.log(" how about now?" ,Response)
            this.setState({
                infoBack: infoRendered
            })
            
            

            console.log(infoRendered);
        })

         console.log(spells);
         console.log(this.state.input);
         console.log(" is it working or what?", this.state.infoBack);
    }

    
    
    render  ()  {
    console.log("is it working now")
    return(
            <div>
            <form onSubmit = {this.handlingSubmit}>
                <label>
                    <input type ="text" value={this.state.input} onChange = {this.userInput}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
          
            { 
                this.state.infoBack.map((iterate) => {
                    return(
                        
                            <div key = {iterate._id}>
                                <h1>{iterate.spell}</h1>
                                <h2>{iterate.type}</h2>
                                <h3>{iterate.effect}</h3>
                            </div>
                            
                        
                    )
                })
            }
            </div>  
                ) 
    }
}