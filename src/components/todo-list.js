import React from "react";
import TodoListItem from "./todo-item";

const TodoList = () => {
    return (
        <ul>
        <li><TodoListItem/></li>
        <li>Create App</li>
        </ul>
    );
};

export default TodoList;