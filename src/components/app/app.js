import React from "react";
import HeaderApp from "../app-header";
import SearchWord from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./app.css";

const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id:1},
        {label: 'Create App', important: true, id:2},
        {label: 'Build App', important: false, id:3}
    ]

    return (
    <div className="todo-app">
        <HeaderApp toDo={1} done={3}/>
        <div className="top-panel d-flex">
        <SearchWord/>
        <ItemStatusFilter/>
        </div>
        <TodoList todos = {todoData}/>
    </div>
    )
}

export default App;