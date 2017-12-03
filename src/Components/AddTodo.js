import React from 'react';
import uuid from 'uuid';

class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    priorities: [
        'Low',
        'Medium',
        'High'
    ]
  };

  handleSubmit(e) {
    var title = this.refs.title.value;
    var priority = this.refs.priority.value;
    if(title) {
      this.setState({
        newTodo: {
            id: uuid.v4(),
            title: title,
            priority: priority
        }
      }, function() {
        this.props.addTodo(this.state.newTodo);
      });
    }
    e.preventDefault();
  }

  render() {
    let priorityOptions = this.props.priorities.map(priority => {
      return (
          <option key={priority} value={priority}>{priority}</option>
      );
    });
    return (
      <div>
        <h3>Add Todo</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" required/>
          </div>
          <br />
          <div>
            <label>Priority</label><br />
            <select ref="priority">
              {priorityOptions}
            </select>
          </div>
          <br />
          <div>
            <input type="submit" /><br />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;