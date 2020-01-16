import React from 'react';
import { Switch,Route } from 'react-router-dom'
import About from './components/about/index'
import Home from './components/Home/Home'
import Login from './components/RegisterLogin'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/> 

    </Switch>
  );
}

export default App;
