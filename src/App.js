import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BlogRollContainer from './containers/BlogRollContainer';
import './scss/App.css';

const App = () =>
  <div id="app-container">
    <Router>
      <div className="app">
        <Route exact path="/" component={BlogRollContainer} />
      </div>
    </Router>
  </div>;

export default App;
