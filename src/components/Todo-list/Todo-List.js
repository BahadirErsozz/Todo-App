import React from "react";
import Todo from "../Todo-Item/Todo-Item";

const TodoList = ({todos, deleteOnClick, finishOnClick}) =>{
    return (
        todos.map(todo =>{
            return <Todo todo={todo} key={todo.id} deleteOnClick={deleteOnClick} finishOnClick={finishOnClick}></Todo>
        })
    )
}

export default TodoList;