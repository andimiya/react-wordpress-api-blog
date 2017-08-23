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
    $.get('http://ec2-52-90-58-181.compute-1.amazonaws.com/wp-json/wp/v2/posts').then(data => {
      console.log(data, 'posts');
      this.setState({ posts: data });
    });
  }

  getAllUsers() {
    $.get('http://ec2-52-90-58-181.compute-1.amazonaws.com/wp-json/wp/v2/users').then(data => {
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
      <div className="home">
        <section class="blog-heading">
          <div class="blog-container" />
        </section>
        <section class="blog-roll">
          <div class="container">
            <ul class="post-list">
              {this.state.posts.map(data => {
                return (
                  <div className="blog-item-container">
                    <li>
                      <h2 className="post-title">
                        {data.title.rendered}
                      </h2>
                      <div className="post-preview">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data.excerpt.rendered
                          }}
                        />
                      </div>
                      <li className="post-date">
                        {moment(data.date).format('MMM DD, YYYY')}
                      </li>
                      <li className="post-author">
                        {data.author}
                      </li>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default BlogRollContainer;
