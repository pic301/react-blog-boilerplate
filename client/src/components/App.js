import React from 'react';
import { Switch,Route } from 'react-router-dom'
import About from './about/'
import  Login  from './RegisterLogin'
import Home from './Home/Home'

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
