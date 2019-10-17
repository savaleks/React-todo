import React, {Component} from "react";
import "./todo-item.css";

class TodoListItem extends Component {

    constructor(){
        super();
        this.onLabelClick = () => {
            this.setState(({done}) => {
                return {
                    done: !done
                };
            });
        };
        this.state = {
            done: false,
            important: false
        }
        this.onMarkImportant = () => {
            this.setState(({important}) => {
                return {
                    important: !important
                }
            });
        };
    }

    render(){

        const {label, onDeleted} = this.props;

        const { done, important } = this.state;

        let classNames = 'todo-item';
        if (done){
            classNames += ' done';
        }
        if(important){
            classNames += ' important';
        }
    
        return (
        <span className={classNames}>
            <span className="todo-item-label" 
                onClick = {this.onLabelClick}>
                {label}
            </span>
    
                <button type="button"
                className="btn btn-outline-success btn-small float-right"
                onClick={this.onMarkImportant}>
                <i className="fa fa-exclamation"/>
                </button>
                
                <button type="button"
                className="btn btn-outline-danger btn-small float-right"
                onClick={onDeleted}>
                <i className="fa fa-trash"/>
                </button>
            
        </span>
        )
    }
}

export default TodoListItem;