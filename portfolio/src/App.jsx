// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import App from './App';
import Projects from './Projects';
import Blogs from './Blogs';

const MainApp = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/projects" component={Projects} />
        <Route path="/blogs" component={Blogs} />
  kjkjknj
      </Switch>
      <Footer />
    </Router>
  );
};

export default MainApp;
