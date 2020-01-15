import React from 'react';
import About from './components/about/index'
import Home from './components/Home'
import { Switch,Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>

    </Switch>
  );
}

export default App;
