import React, { Component } from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.getAllPosts = this.getAllPosts.bind(this);
  }

  getAllPosts() {
    $.get('http://localhost:8080/wp-json/wp/v2/posts').then(data => {
      this.setState({ posts: data });
    });
  }

  componentDidMount() {
    this.getAllPosts();
  }

  render() {
    console.log(this.state.posts, 'all posts data');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.state.posts.map(data => {
          return (
            <div>
              {data.author}
              {data.slug}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
