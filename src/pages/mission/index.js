import React, { Component } from 'react';
import Title from '../parts/title';
import Footer from '../parts/footer.js';
import CommentForm from './CommentForm.js';
import CommentList from './CommentList.js';
import axios from 'axios';
import todos from '../../todos.json'

export default class Mission extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: []
    };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  loadCommentsFromServer() {
    axios.get('../../todos.json')
    .then(res => {
      this.setState({ data: res.data });
    })
    .catch(res => {
      console.log(res)
    });
  }

  handleCommentSubmit(comment) {
    comment.id = new Date();
    let comments = this.state.data;
    let newComments = comments.concat([comment]);
    this.setState({data: newComments});

    axios.post('../../todos.json', {
      data: comment,
    })
    .then((data) => {
      this.setState({data: res.data});
    })
    .catch((res) => {
      console.log(res)
    });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer(), 2000);
  }

  render() {
    return (
      <div className="main">
        <div className="section">
          <Title title="みっしょん" />
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
          <CommentList data={this.state.data} />
        </div>
        <Footer />
      </div>
    );
  }
}
