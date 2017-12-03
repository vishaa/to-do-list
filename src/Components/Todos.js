import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
  }
 
  onDelete(id) {
    this.props.onDelete(id);
  }

  render() {
    let toDoItems;
    if(this.props.todos) {
      toDoItems = this.props.todos.map((todo) => {
        return (
          <TodoItem onDelete={this.onDelete} key={todo.title} todo={todo}/>
        );
      });
    }
    return (
      <div className='Project'>
        <h3>To Do List</h3>
        {toDoItems}
      </div>
    );
  }
}

export default Todos;