import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';

class BlogRollContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: []
    };
    this.getAllPosts = this.getAllPosts.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  getAllPosts() {
    $.get('http://localhost:8080/wp-json/wp/v2/posts').then(data => {
      console.log(data, 'posts');
      this.setState({ posts: data });
    });
  }

  getAllUsers() {
    $.get('http://localhost:8080/wp-json/wp/v2/users').then(data => {
      console.log(data, 'users');
      this.setState({ users: data });
    });
  }

  componentDidMount() {
    this.getAllPosts();
    this.getAllUsers();
  }

  render() {
    // console.log(this.state.posts, 'all posts data');
    return (
      <div className="blog-roll-container-outer">
        <div className="blog-roll-container-inner">
          {this.state.posts.map(data => {
            return (
              <div className="blog-item-container">
                <h2 className="post-title">
                  {data.title.rendered}
                </h2>
                <div
                  className="post-excerpt"
                  dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
                />
                <div className="post-date">
                  {moment(data.date).format('MMM DD, YYYY')}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BlogRollContainer;
