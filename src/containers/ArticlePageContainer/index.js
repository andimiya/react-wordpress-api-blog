import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';

class ArticleContainer extends Component {
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
    return (
      <main className="page-content" aria-label="Content">
        <article className="post">
          <header className="post-header">

            <div className="container">
              <a className="roll-link" href="/">
                Back to blog posts
              </a>

                {this.state.posts.map(data => {
                  return (

                        <h1 className="post-title">
                          {data.title.rendered}
                        </h1>
                        <p className="post-meta">
                          {moment(data.date).format('MMM DD, YYYY')}
                        </p>
                        <span itemProp="author">
                          <span itemProp="name">{data.author}</span>
                        </span>
                        <div className="post-preview">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: data.excerpt.rendered
                            }}
                          />
                        </div>
                        <li className="post-date">

                        </li>
                        <li className="post-author">

                        </li>

                  );
                })}
            </div>
            </header>
        </article>
      </main>
    );
  }
}

export default ArticleContainer;
