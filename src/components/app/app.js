import React, {Component} from "react";
import HeaderApp from "../app-header";
import SearchWord from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";
import "./app.css";

class App extends Component {

    itemId = 100;

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
            const newArray = [...before, ...after];

            return {
                todoData: newArray
            }
        })
    }

    onButtonClickAddItem = (text) => {
        
        const newItem = {
            label: text,
            important: false,
            // generate item id;
            id: this.itemId++
        }

        // add element in array
        this.setState(({todoData}) => {
            const newArr = [... todoData, newItem]
            return {
                todoData: newArr
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
                <AddItem onItemAdded={this.onButtonClickAddItem}/>
            </div>
            )
    }
}

export default App;