import React, { useEffect, useRef, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import TodoList from "./components/Todo-list/Todo-List";

function App() {
 const [todos, setTodos] = useState([])
 const [clicked, setClicked] = useState("")

 const inputRef = useRef()
 const handleClickOutside = (e) => {
  if(e.target.classList.value !== "todo-div" && e.target.classList.value !== "todo-input" && e.target.classList.value !== "form-button")
    setClicked("")
    console.log(e.target.classList.value)
 }
 useEffect(() => {
  document.addEventListener('click', handleClickOutside, true)
 }, []) 
  const addItem = (e) => {
    const inp = inputRef.current.value
    if(inp !== ""){
      setTodos(oldArray => {
        return [...oldArray, {id: uuidv4(), name: inp, finished: false, type:"todo-item", parent_id: clicked}]
      }) 
    } 
    inputRef.current.value = null
  }
  const selectFolderOnClick = (id) => { 
    setClicked(id)
  }
  const addFolder = (e) => {
    const inp = inputRef.current.value
    if(inp !== ""){
      setTodos(oldArray => {
        return [...oldArray, {id: uuidv4(), name: inp, finished: false, type:"folder", parent_id: clicked}]
      }) 
    }
    inputRef.current.value = null
  }  
  const deleteOnClick = (id) =>{
    setTodos(todos.filter(item => item.id !== id))
  }
  const finishOnClick = (id) => {
    const todosCopy = [...todos]
    const todo = todosCopy.find(todo => todo.id === id)
    todo.finished = !todo.finished
    setTodos(todosCopy)
  }
  const unfinishAll = () =>{
    const todosCopy = [...todos]
    todosCopy.map(todo => {
        if(clicked !== ""){
          if(todo.parent_id === clicked){
            todo.finished = false
          }
        }
        else{
          todo.finished = false
        } 
    })
    setTodos(todosCopy)
  }
 /*  useEffect(() =>{
    fetch("https://catfact.ninja/fact")
      .then(
        res => res.json()
        )
      .then(
        (res) => {
          console.log(res)
        }
      )
      
  }) */
  return (
    <><div className="todo-div">
        <input type="text" placeholder="Todo Name" ref={inputRef} className="todo-input"/>
        <button onClick={addItem} className="form-button"> Add</button> 
        <button onClick={unfinishAll} className="form-button"> Unfinish All</button>
        <button onClick={addFolder} className="form-button"> Add Folder</button>
      </div>
      <div className="todo-list">
        <TodoList todos={todos} deleteOnClick={deleteOnClick} finishOnClick={finishOnClick} clicked={clicked} selectFolderOnClick={selectFolderOnClick}></TodoList>  
      </div>
    </>
  );
}

export default App
