import React, {Component} from 'react'

export default class Comment extends Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(){
    this.props.onCommentDelate(this.props.comment.id)
  }

  render() {
    return(
      <div className='comment'>
        <span>{this.props.children}</span>
        <button onClick={this.handleDelete}>削除</button>
      </div>
    );
  }
}
