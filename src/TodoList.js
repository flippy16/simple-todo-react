import React from 'react';
import TodoItem from './TodoItem';
const TodoList = (props) => {
    return (
    <div>
        {
            props.arrTodo.map((todo,idx ) => {
            return (
                <TodoItem 
                    key={idx}
                    idx = {idx}
                    todo = {todo}
                    doneTodo = {props.doneTodo}
                    removeTodo = {props.removeTodo}
                />
                )
            }
        )
        }
    </div>
    )
}

export default TodoList;