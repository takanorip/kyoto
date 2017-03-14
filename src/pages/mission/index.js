import React, { Component } from 'react';
import Title from '../parts/title';
import Footer from '../parts/footer.js';
import CommentForm from './CommentForm.js';
import Comment from './Comment.js';
import axios from 'axios';

export default class Mission extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  handleCommentSubmit(comment) {
    comment.id = new Date();
    const newComments = this.state.data.concat(comment);
    this.setState({data: newComments});
  }

  handleCommentDelete(id) {
    this.setState({
      data: this.state.data.filter((comment) => {
        return comment.id !== id
      })
    });
  }

  render() {
    const commentNodes = this.state.data.map((comment) => {
      return(<Comment key={comment.id} comment={comment} onCommentDelate={this.handleCommentDelete}>{comment.text}</Comment>);
    });
    return (
      <div className="main">
        <div className="section">
          <Title title="みっしょん" />
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
          <div className="commentList">{commentNodes}</div>
        </div>
        <Footer />
      </div>
    );
  }
}
