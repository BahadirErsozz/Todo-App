import { useState } from "react";
import React from "react";
import "./Todo-Item.css";

const Todo = ({todo, deleteOnClick, finishOnClick}) => {
    const deleteClickHandler = () => {
        deleteOnClick(todo.id)
    }
    const finishClickHandler = () => {
        finishOnClick(todo.id)
    }
    return(
        <div className="todo-item-div"> 
            <h1 className="todo-name">{todo.name}</h1>
            {todo.finished ? 
                <h1> yes</h1> 
                : 
                <h1> no</h1>
            }
            
            <div className="buttons">
            {todo.finished ? 
                <button className="todo-finish-button" onClick={finishClickHandler} variant="outline-success"> Unfinish </button> 
                : 
                <button className="todo-finish-button" onClick={finishClickHandler} variant="outline-success"> Finish </button> 
            }
            
            <button className="todo-delete-button" onClick={deleteClickHandler}> Delete</button>
            </div>
        </div>
    );
}

export default Todo;