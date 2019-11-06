import React, {Component} from "react";
import "./add-item.css"

class AddItem extends Component {

    render() {
        return (
            <div className="add-item">
            <button className="btn btn-outline-success btn-small float-right"
            onClick={() => this.props.onItemAdded("hello react")}>
            <i className="fa fa-plus"/> Add
            </button>
            </div>
        )
    }
}

export default AddItem;