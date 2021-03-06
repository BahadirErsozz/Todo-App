import React from "react";
import Todo from "../Todo-Item/Todo-Item";
import Folder from "../Folder/Folder"
const TodoList = ({todos, deleteOnClick, finishOnClick, clicked, selectFolderOnClick}) =>{
    return (
        todos.map(todo =>{
            if(todo.parent_id === ""){
                return (todo.type === "folder") 
                ? 
                <Folder todo={todo} key={todo.id} deleteOnClick={deleteOnClick} finishOnClick={finishOnClick} selectFolderOnClick={selectFolderOnClick} clicked={clicked} todos={todos}></Folder>
                :
                <Todo todo={todo} key={todo.id} deleteOnClick={deleteOnClick} finishOnClick={finishOnClick}></Todo>
            }
        })
    )
}

export default TodoList;