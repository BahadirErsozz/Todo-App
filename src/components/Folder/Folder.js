import React from "react";
import "../Todo-Item/Todo-Item.css"
import Todo from "../Todo-Item/Todo-Item";

const Folder = ({todo, deleteOnClick, finishOnClick, selectFolderOnClick}) => {
    const deleteClickHandler = () => {
        deleteOnClick(todo.id)
    }
    const selectFolderOnClickHandler = () => {
        selectFolderOnClick(todo.id)
    }
    return(
        <>
        <div className="todo-item-div" onClick={selectFolderOnClickHandler}> 
            <h1 className="todo-name">{todo.name}</h1>            
            <button className="todo-delete-button" onClick={deleteClickHandler}> Delete</button> 
        </div>
        <div style={{width : "30%"}}>
        {todo.folder_todos.map(folder_todo => {
            return(
                <Todo todo={folder_todo} key={folder_todo.id} deleteOnClick={deleteOnClick} finishOnClick={finishOnClick}></Todo>
            )
        })}  
        </div> 
        </>
    )
}

export default Folder