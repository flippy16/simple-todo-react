import React from 'react';

const TodoItem = (props) => {
    const {todo, idx} = props;
    return (
        <div className="d-flex todo" >
            <button className="btn btn-primary mr-3" onClick={(event) => props.doneTodo(idx)}> Done</button>
            <span className={todo.isDone ? 'my-auto doneTodo': 'my-auto'}>{todo.title}</span>
            <button className="btn btn-danger ml-auto" onClick={(event) => props.removeTodo(idx)}>Remove</button>
        </div>
    )
}

export default TodoItem;