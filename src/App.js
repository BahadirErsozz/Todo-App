import React, { useEffect, useRef, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import TodoList from "./components/Todo-list/Todo-List";

function App() {
 const [count, setCount] = useState(0)
 const [name, setName] = useState("name")
 const [todos, setTodos] = useState([])
 const [userInput, setUserInput] = useState("")
 const [clicked, setClicked] = useState("")

 const inputRef = useRef() 
  const addItem = (e) => {
    const inp = inputRef.current.value
    if(inp !== ""){
      if(clicked === ""){
        setTodos(oldArray => {
          return [...oldArray, {id: uuidv4(), name: inp, finished: false, type:"todo-item"}]
        })
      }
      else{
        const newTodos = todos.map(obj => {
          if(obj.id === clicked){
            const newFolder_todos = obj.folder_todos
            return {...obj, folder_todos: [...newFolder_todos, {id: uuidv4(), name: inp, finished: false, type:"todo-item"}]}
          }
          return obj
        })
        setTodos(newTodos)
        
      }
    } 
    inputRef.current.value = null
  }
  const selectFolderOnClick = (id) => {
    console.log("selected")
    setClicked(id)
    return
  }
  const addFolder = (e) => {
    const inp = inputRef.current.value
    if(inp !== "")
    setTodos(oldArray => {
      return [...oldArray, {id: uuidv4(), name: inp, finished: false, type:"folder", folder_todos: []}]
    })
    inputRef.current.value = null
  }  
  const deleteOnClick = (id) =>{
    setTodos(todos.filter(item => item.id !== id))
  }
  // folder'dan değiştirmem lazım
  const finishOnClick = (id) => {
    const todosCopy = [...todos]
    const todo = todosCopy.find(todo => todo.id === id)
    todo.finished = !todo.finished
    setTodos(todosCopy)
  }
  const unfinishAll = () =>{
    const todosCopy = [...todos]
    todosCopy.map(todo => {
        todo.finished = false
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
