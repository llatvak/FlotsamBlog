import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';

import Main from './components/Main'
import NewPost from './components/NewPost'

export default function App() {
  return (
    <Router>
      <div>
        <CssBaseline>
          <Switch>
            <Route path="/" exact={true} component={Main}/>
            <Route path="/newpost" component={NewPost}/>
          </Switch>
        </CssBaseline>
      </div>
    </Router>
  );
}