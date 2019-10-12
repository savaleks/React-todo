import React from "react";
import ReactDOM from "react-dom";
import HeaderApp from "./components/app-header";
import SearchWord from "./components/search-text";
import TodoList from "./components/todo-list";

const App = () => {
    return (
        <div>
        <span>{(new Date()).toString()}</span>
    <HeaderApp />
    <SearchWord/>
    <TodoList/>
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));