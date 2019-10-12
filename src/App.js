import React from 'react';
import Main from './components/main';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Buy from './components/buy';
import { Card } from 'antd';

function App() {
  return (
    <div>
      <Main />
      <Router>
        <Switch>
          <Route path="/buy" component={Buy} />
          <Route path="/card" component={Card} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
