import React from "react";
import "../Todo-Item/Todo-Item.css"
import Todo from "../Todo-Item/Todo-Item";

const Folder = ({todo, todos, deleteOnClick, finishOnClick, selectFolderOnClick, clicked}) => {
    const deleteClickHandler = () => {
        deleteOnClick(todo.id)
    }
    const selectFolderOnClickHandler = () => {
        selectFolderOnClick(todo.id)
    }
    return(
        <>
        <div className="todo-item-div" onClick={selectFolderOnClickHandler} style={{backgroundColor: (clicked === todo.id) ? "#a4b6c8" : ""}}> 
            <h1 className="todo-name">{todo.name}</h1>            
            <button className="todo-delete-button" onClick={deleteClickHandler}> Delete</button> 
        </div>
        <div style={{width : "80%"}}>
        {todos.map(someTodo => {
            return(
                someTodo.parent_id === todo.id 
                ? 
                    someTodo.type === "todo-item" 
                    ?
                    <Todo todo={someTodo} key={someTodo.id} deleteOnClick={deleteOnClick} finishOnClick={finishOnClick}></Todo>
                    :
                    <Folder todo={someTodo} todos={todos} key={someTodo.id} deleteOnClick={deleteOnClick} finishOnClick={finishOnClick} selectFolderOnClick={selectFolderOnClick} clicked={clicked}></Folder>
                :
                ""
            )
        })}  
        </div> 
        </>
    )
}

export default Folder