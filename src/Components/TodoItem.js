import React from 'react';

class TodoItem extends React.Component {
  deleteTodo(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className='Todo'>
        <strong>{this.props.todo.title}</strong>({this.props.todo.priority}) 
        <a href='#' onClick={this.deleteTodo.bind(this, this.props.todo.id)}> x</a>
      </li>
    );
  }
}

export default TodoItem;