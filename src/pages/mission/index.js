import React, { Component } from 'react';
import Title from '../parts/title';
import Footer from '../parts/footer.js';
import CommentForm from './CommentForm.js';
import Comment from './Comment.js';
import axios from 'axios';
// import todos from './todos.json'

export default class Mission extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
    // this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  // loadCommentsFromServer() {
  //   axios.get('./todos.json')
  //   .then(res => {
  //     this.setState({ data: res.data });
  //   })
  //   .catch(res => {
  //     console.log(res)
  //   });
  // }

  handleCommentSubmit(comment) {
    comment.id = new Date();
    const newComments = this.state.data.concat(comment);
    this.setState({data: newComments});

    // axios.post('./todos.json', {
    //   id: comment.id,
    //   text: comment.text
    // })
    // .then(res => {
    //   this.setState({data: res.data});
    //   console.log(res)
    // })
    // .catch(res => {
    //   console.log(res)
    // });
  }

  handleCommentDelete(id) {
    this.setState({
      data: this.state.data.filter((comment) => {
        return comment.id !== id
      })
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer(), 2000);
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
