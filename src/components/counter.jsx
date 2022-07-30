import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        const {value, id} = this.props.counter;
        return (
            <div>
                <h4>{this.props.id}</h4>
                <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter,"dec")} disabled= {!value}>-</button>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter,"inc")}>+</button>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(id)}>X</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

}
 
export default Counter;