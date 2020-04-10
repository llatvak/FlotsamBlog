import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "rbx/index.css";

import Main from './components/Main';
import NewBlogPost from './components/NewBlogPost';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <NavBar />
      <div>
          <Switch>
            <Route path="/" exact={true} component={Main}/>
            <Route path="/posts/:id" component={BlogPost}/>
            <Route path="/user/new" component={NewBlogPost}/>
            <Route path="/user/login" component={Login}/>
            <Route path="/user/dashboard" component={Dashboard}/>
          </Switch>
      </div>
    </Router>
  );
}
