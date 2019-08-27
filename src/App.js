import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Simple Todo App React',
      newTodo: '',
      arrTodo: [{
        title: 'Buy Some Milks',
        isDone: false
      },{
        title: 'Study Group',
        isDone: false
      }],
    };
  }
  submitTodo(event){
    event.preventDefault();
    console.log(this.state.newTodo);
    const arrTodo = this.state.arrTodo.slice();
    arrTodo.push({
      title: this.state.newTodo,
      isDone: false
    });
    this.setState({
      arrTodo,
      newTodo : ''
    });
  }
  inputChange(event){
    this.setState({
      newTodo : event.target.value,
    });
  }
  doneTodo(idx){
    const arrTodo = [...this.state.arrTodo];
    arrTodo[idx] = {...arrTodo[idx]};    
    if(!arrTodo[idx].isDone) arrTodo[idx].isDone=true;
    else arrTodo[idx].isDone=false;
    console.log(arrTodo[idx].isDone);
    this.setState({
      arrTodo
    });
  }
  removeTodo(idx){
    const arrTodo = [...this.state.arrTodo];
    arrTodo.splice(idx,1);
    this.setState({
      arrTodo
    });
  }
  markAllDone(event){
    const arrTodo = this.state.arrTodo.map(todo =>{
      return {
        title: todo.title,
        isDone: true
      }
    });
    this.setState({
      arrTodo
    });
  }
  render(){
    return (
      <div className="row">
        <div className="col-md-2">&nbsp;</div>
        <div className="col-md-8">
          <div className="container-width">
            <h1 className="m-3 App">{this.state.title}</h1>
            <TodoForm
            submitTodo = {this.submitTodo.bind(this)} 
            inputChange = {this.inputChange.bind(this)} 
            newTodo = {this.state.newTodo}/> 
            <div>
              <h3 className="mt-5">Todo List</h3>
              <button className="btn btn-warning" onClick={(event) => this.markAllDone(event)}>All Done</button>
            </div>
            <TodoList
              arrTodo = {this.state.arrTodo}
              doneTodo = {this.doneTodo.bind(this)}
              removeTodo = {this.removeTodo.bind(this)}
            />
          </div>
        </div>
        <div className="col-md-2">&nbsp;</div>
      </div>
    );
  }
}

export default App;
