import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  constructor(props) {
    super(props)
    this.handleTodoDelete = this.handleTodoDelete.bind(this)
  }

  handleTodoDelete(id) {
    this.setState({
      todos: this.state.data.filter((comment) => {
        return todo.id !== id;
      })
    })
  }

  render() {
    let commentNodes = this.props.data.map((comment) => {
      return(<Comment key={comment.id} onTodoDelate={this.handleTodoDelete}>{comment.text}</Comment>);
    });
    return(
      <div className="commentList">{commentNodes}</div>
    );
  }
}
