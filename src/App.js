import React ,{Component} from 'react';
import './App.css';
import Login,{Signup} from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';
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
                    <Route exact path ="/" component= {Home} />

                </Router>          
            </div>
          ):(
              <div className="App">
                <Router>
                  <nav>
                    <Link to="/Signup" >Not a User ? Signup</Link>
                    <Link to="/" ></Link>
                  </nav>
                  <Route exact path="/Login" component={Login}>
                  </Route>
                  <Route exact path="/Signup" component={Signup}>
                  </Route>
                </Router>
                <Login/>
              </div>

          )
         );
  }
 
}

export default App;
