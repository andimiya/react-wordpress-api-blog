import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogRollContainer from './containers/BlogRollContainer';
import ArticleContainer from './containers/ArticleContainer';
import TopNav from './components/TopNav';
import './scss/App.css';

const App = () =>
  <div id="app">
    <Router>
      <div className="app-layout">
        <TopNav />
        <Route exact path="/" component={BlogRollContainer} />
        <Route exact path="/article/:slug" component={ArticleContainer} />
      </div>
    </Router>
  </div>;

export default App;
