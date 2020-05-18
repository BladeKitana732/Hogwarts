import React,{Component} from 'react';
import axios from 'axios';


const key = process.env.REACT_APP_API_KEY

const spells = `https://www.potterapi.com/v1/spells?key=${key}`

export default class Spells extends Component {
    constructor(props){
        super(props)

        this.state = {
            input: '',
            infoback:[]
        }
    }

    componentDidMount() {
        axios.get(spells)

        .then((result) => {
            const allData = result.data;
            
            this.setState({
                infoBack:allData
            })
        })
        .catch((err) => {
            console.log('error', err)
        })
    }

    render() {
        
        return(
            
            <React.Fragment>
                <div>
                    <h1>crazy</h1>
                    <form onSubmit = {this.handlingSubmit}>
                        <label>
                            <input type ="text" value={this.state.infoBack} onChange = {this.userInput}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                    {
                        this.state.infoBack.map((iterate) => {
                            return(
                                <React.Fragment>
                                    <div key = {iterate.id}>
                                        <h1>{iterate.spell}</h1>
                                        <h2>{iterate.type}</h2>
                                        <h3>{iterate.effect}</h3>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                
            </React.Fragment>
        )
    }
}




