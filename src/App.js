import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Tutorials from './pages/Tutorials';
import Discord from './pages/Discord';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/tutorials" component={Tutorials} />
        <Route path="/discord" component={Discord} />
      </Switch>
    </Router>
  );
};

export default App;
