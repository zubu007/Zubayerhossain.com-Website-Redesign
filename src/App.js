import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import About from './components/pages/About/About'
import Portfolio from './components/pages/Portfolio/Portfolio';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Switch>
    </Router>
  );
}

export default App;
