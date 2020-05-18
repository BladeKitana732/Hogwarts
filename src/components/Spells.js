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
                </div>
                
            </React.Fragment>
        )
    }
}




