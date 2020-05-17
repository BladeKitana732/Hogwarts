import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Wizard from './components/Wizard';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

console.log(process.env.REACT_APP_KEY);





function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path ="/" component= {Login} />
      <Route exact path ="/Home" component= {Home} />
      <Route exact path ="/Profile" component= {Profile} />
      <Route exact path ="/Wizard" component= {Wizard} />
    </Router>
  );
}

export default App;
