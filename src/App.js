import React from 'react';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';

class App extends React.Component { 
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(id) {
    let todos = this.state.todos;
    let index = todos.findIndex(x => x.id === id);
    todos.splice(index, 1);
    this.setState({
      todos: todos
    });
  }

  componentWillMount() {
    this.setState({
      todos: [
        {
          id: uuid.v4(),
          title: 'Wake Up',
          priority: 'High'
        },
        {
          id: uuid.v4(),
          title: 'Eat',
          priority: 'High'
        },
        {
          id: uuid.v4(),
          title: 'Sleep',
          priority: 'High'
        }
      ]
    });
  }

  handleAddTodo(newTodo) {
    let todos = this.state.todos;
    todos.push(newTodo);
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className='App'>
        <AddTodo addTodo={this.handleAddTodo}/>
        <Todos todos={this.state.todos} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export default App;