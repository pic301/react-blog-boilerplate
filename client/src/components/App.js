import React from 'react';
import { Switch,Route } from 'react-router-dom'
import About from './about/'
import  Login  from './RegisterLogin'
import Home from './Home/Home'
import Register from './RegisterLogin/register'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>


    </Switch>
  );
}

export default App;
