import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "rbx/index.css";

import { AuthContext } from "./context/auth";
import PrivateRoute from './PrivateRoute';

import Main from './components/Main';
import NewBlogPost from './components/NewBlogPost';
import BlogPost from './components/BlogPost';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NavBar from "./components/NavBar";
import SearchResults from './components/SearchResults';
import CommentTable from './components/CommentTable';
import NotFound from './components/NotFound';

export default function App() {

  const existingTokens = JSON.parse(localStorage.getItem('tokens'))
  const [authTokens, setAuthTokens] = useState(existingTokens)

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data))
    setAuthTokens(data)
  }

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
    <Router>
      <NavBar />
      <div>
          <Switch>
            <Route path="/" exact={true} component={Main}/>
            <Route path="/search" component={SearchResults}/>
            <Route path="/posts/:id" component={BlogPost}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <PrivateRoute path="/new" component={NewBlogPost}/>
            <PrivateRoute path="/edit" component={NewBlogPost}/>
            <PrivateRoute path="/comments" component={CommentTable}/>
            <Route path="*" component={NotFound}/>
          </Switch>
      </div>
    </Router>
    </AuthContext.Provider>
  );
}
