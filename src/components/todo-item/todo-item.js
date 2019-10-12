import React from "react";
import "./todo-item.css"

const TodoListItem = ({label, important = false}) => {

    const style = {
        color: important ? 'blue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }

    return (
    <span className="todo-item">
        <span className="todo-item-label" 
            style = {style}>{label}</span>

            <button type="button"
            className="btn btn-outline-success btn-small float-right">
            <i className="fa fa-exclamation"/>
            </button>
            
            <button type="button"
            className="btn btn-outline-danger btn-small float-right">
            <i className="fa fa-trash"/>
            </button>
        
    </span>
    )
}

export default TodoListItem;