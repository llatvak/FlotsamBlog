import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';

import Main from './components/Main';

export default function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route path="/" exact={true} component={Main}/>
          </Switch>
      </div>
    </Router>
  );
}