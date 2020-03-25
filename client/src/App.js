import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "rbx/index.css";

import Main from './components/Main';
import NewBlogPost from './components/NewBlogPost';


export default function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route path="/" exact={true} component={Main}/>
            <Route path="/newpost" component={NewBlogPost}/>
          </Switch>
      </div>
    </Router>
  );
}