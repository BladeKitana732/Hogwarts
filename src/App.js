import React ,{Component} from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import firebase  from './config/fireauth';

class  App extends Component{
  constructor(props){
    super();
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    firebase.auth().onAuthStateChanged((user)=>{
      //console.log(user);
      if(user){
        this.setState({user});
      }
      else{
        this.setState({user:null});
      }
    })
  }
  render(){
        return (
          this.state.user?(
            <div className="App">
              <Router>
                <Navbar />
                    <Route exact path ="/Home" component= {Home} />
                    <Route exact path ="/Profile" component= {Profile} />
                    <Route exact path ="/Hero" component= {Hero} />
                </Router>          
            </div>
          ):(
              <div className="App">
                <Login/>
              </div>

          )
         );
  }
 
}

export default App;
