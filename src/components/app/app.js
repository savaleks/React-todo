import React, {Component} from "react";
import HeaderApp from "../app-header";
import SearchWord from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./app.css";

class App extends Component {

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id:1},
            {label: 'Create App', important: true, id:2},
            {label: 'Build App', important: false, id:3}
        ]
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((elem) => elem.id === id);

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);
            const newArray = [... before, ... after];

            return {
                todoData: newArray
            }
        })
    }

    render(){
        return (
            <div className="todo-app">
                <HeaderApp toDo={1} done={3}/>
                <div className="top-panel d-flex">
                <SearchWord/>
                <ItemStatusFilter/>
                </div>
                <TodoList todos = {this.state.todoData}
                onDeleted={this.deleteItem}/>
            </div>
            )
    }
}

export default App;