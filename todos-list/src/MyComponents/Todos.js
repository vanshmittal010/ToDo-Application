import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
    let TodosStyle = {
        minHeight : "70vh",
        margin: "6vw auto"
    }
    return (
        <div className="container" style={TodosStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length==0? "No Todos to display":
            props.todos.map((todo)=>{
                return (
                <>
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
                <hr></hr>
                </>
                )
            })
            }
        </div>
    )
}