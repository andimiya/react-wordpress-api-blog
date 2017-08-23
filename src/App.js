import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogRollContainer from './containers/BlogRollContainer';
import TopNav from './components/TopNav';
import './scss/App.css';

const App = () =>
  <div id="app">
    <Router>
      <div className="app-layout">
        <TopNav />
        <Route exact path="/" component={BlogRollContainer} />
      </div>
    </Router>
  </div>;

export default App;
