import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

    constructor(){
        super();
        console.log('App - constructor', this.props);
    }

    componentDidMount(){
        console.log('App - componentDidMount');
    }

    state = { 
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
     } 

    deleteHandler = (counterId) => {
       const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        }
        );
        this.setState({counters});
    }

    handleIncrement = (counter, product) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        const {value} = counters[index];
        counters[index].value = value + (product === "inc" ? 1 : -1);
        this.setState({counters});
    }

    render() { 
        console.log('App - render');
        return (
            <div>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset = {this.handleReset}
                        onIncrement = {this.handleIncrement}
                        onDelete = {this.deleteHandler}
                    />
                </main>
           </div>
        );
    }
}
 
export default App;