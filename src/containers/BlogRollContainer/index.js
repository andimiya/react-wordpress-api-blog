import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';
import { Link } from 'react-router-dom';

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
      this.setState({ posts: data });
    });
  }

  getAllUsers() {
    $.get('http://ec2-52-90-58-181.compute-1.amazonaws.com/wp-json/wp/v2/users').then(data => {
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
        <div className="home">
          <section className="blog-heading">
            <div className="blog-container">
              Blog Wavy Lettering
            </div>
          </section>
          <section className="blog-roll">
            <div className="container">
              <ul className="post-list">
                {this.state.posts.map(data => {
                  return (
                    <li>
                      <h2>
                        <Link className="post-link" to={`articles/${data.slug}`}>
                          {data.title.rendered}
                        </Link>
                      </h2>
                      <div className="post-preview">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data.excerpt.rendered
                          }}
                        />
                      </div>
                      <a className="post-cta" href="/">
                        Read more
                      </a>
                      <div className="post-meta">
                        <ul>
                          <li className="post-date">
                            {moment(data.date).format('MMM DD, YYYY')}
                          </li>
                          <li className="post-author">
                            {data.author}
                          </li>
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default BlogRollContainer;
