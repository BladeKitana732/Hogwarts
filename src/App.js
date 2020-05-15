import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import React from './heroComp/hero';

function App() {
  return (
    <div>

    </div>
    // <Router>
    //   <Navbar />
    //   <Route exact path ="/" component= {Login} />
    //   <Route exact path ="/Home" component= {Home} />
    //   <Route exact path ="/Profile" component= {Profile} />
    //   <Route exact path ="/Hero" component= {Hero} />
    // </Router>
  );
}

export default App;
