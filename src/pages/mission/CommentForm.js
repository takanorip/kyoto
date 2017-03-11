import React, {Component} from 'react';

export default class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let text = this.refs.text.value.trim();
    if (!text) return;
    this.props.onCommentSubmit({text: text});
    this.refs.text.value = '';
  }

  render() {
    return(
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="やること" ref="text" />
        <button type="submit" value="Post">追加</button>
      </form>
    );
  }
}
