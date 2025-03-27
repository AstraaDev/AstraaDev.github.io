import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Discord from './pages/Discord';
import Tutorials from './pages/Tutorials';
import Analytics from './analytics';

const App = () => {
  return (
    <Router>
      <Header />
      <Analytics />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={() => <div>Portfolio Page</div>} />
        <Route path="/tutorials" component={Tutorials} />
        <Route path="/discord" component={Discord} />
      </Switch>
    </Router>
  );
};

export default App;
