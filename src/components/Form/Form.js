import React from "react";
import "./Form.css";

const Form = ({addItem}) =>{
    const submitHandler = (event) => {
        event.preventDefault();
    }
    return( 
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="Todo Name"/>
        <button onClick={addItem}></button>
    </form>
    );
}

export default Form;