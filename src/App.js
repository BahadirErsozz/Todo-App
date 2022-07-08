import React, { useRef, useState } from "react";
import Todo from "./components/Todo-Item/Todo-Item";
import {v4 as uuidv4} from 'uuid';
import TodoList from "./components/Todo-list/Todo-List";

function App() {
 const [count, setCount] = useState(0)
 const [name, setName] = useState("name")
 const [todos, setTodos] = useState([])
 const [userInput, setUserInput] = useState("")

 const inputRef = useRef() 
  const handleDelete = () =>{
    setTodos(todos.filter(item => item.id !== 0))
  }
  const handleClick = () => {
    
    setTodos(oldArray => [...oldArray, <Todo content={userInput} ></Todo>])
    setCount(count + 1)
    setName(name.concat("asd"))
    return
  }
  const onInputChange = (inp) => {
    setUserInput(inp.target.value)
  }
  const addItem = (e) => {
    const inp = inputRef.current.value
    if(inp !== "")
    setTodos(oldArray => {
      return [...oldArray, {id: uuidv4(), name: inp, finished: false}]
    })
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
        todo.finished = false
    })
    setTodos(todosCopy)
  }
  return (
    <><div className="todo-div">
        <input type="text" placeholder="Todo Name" ref={inputRef} className="todo-input"/>
        <button onClick={addItem} className="form-button"> Add</button> 
        <button onClick={unfinishAll} className="form-button"> Unfinish All</button>
      </div>
      <div className="todo-list">
        <TodoList todos={todos} deleteOnClick={deleteOnClick} finishOnClick={finishOnClick}></TodoList>  
      </div>
    </>
  );
}

export default App
