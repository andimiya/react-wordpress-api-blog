import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';

class ArticleContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articleBody: null,
      articleTitle: null,
      articleExcerpt: null,
      author: null,
      datePublished: null,
      slug: null,
    };

  }

  componentDidMount() {

    const postId = this.props.location.pathname.split('/').pop();
    console.log(postId, 'postid');
    return $.get('http://ec2-52-90-58-181.compute-1.amazonaws.com/wp-json/wp/v2/posts').then(items => {
      console.log(items, 'items');
      for (var i = 0; i < items.length; i++) {
        if (items[i].slug === postId) {
          return this.setState({
            articleBody: items[i].content,
            articleTitle: items[i].title,
            articleExcerpt: items[i].exerpt,
            author: items[i].author,
            datePublished: moment(items[i].date).format('LL'),
            slug: items[i].slug,
          });
        }
      }
    });
  }

  render() {

    console.log(this.state.articleBody, 'state');

    return (
      <main className="page-content" aria-label="Content">
        <article className="post">
          <header className="post-header">
            <div className="container">
              <a className="roll-link" href="/">
                Back to blog posts{this.state.articleTitle}
              </a>
                <h1 className="post-title">
                  {this.state.articleTitle}
                </h1>
                <p className="post-meta">
                  {this.state.datePublished}
                  <span itemProp="author">
                    {this.state.author}
                  </span>
                </p>
              </div>
            </header>
            <div className="post-content">
              <div className="container">
                <p
                  dangerouslySetInnerHTML={{
                    __html: this.state.articleBody
                  }}
                />
              </div>
            </div>
        </article>
      </main>
    );
  }
}

export default ArticleContainer;
