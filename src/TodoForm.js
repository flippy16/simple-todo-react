import React from 'react';

const TodoForm = (props) =>{
    return(
        <form onSubmit={props.submitTodo} className="form-group">
            <br/>
            <input onChange={props.inputChange} type="text" className="form-control" name="newTodo" id="newTodo" placeholder="Go to the Gym, Shopping, etc." value={props.newTodo}/>
            <br/>
            <input type="submit" className="btn btn-success btn-add-todo" value="Add Todo"/>
        </form>
    );
}

export default TodoForm;