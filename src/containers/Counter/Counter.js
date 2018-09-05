import React, { Component } from 'react';
import {connect} from 'react-redux'; // function that returns HOC


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter}  />
            </div>
        );
    }
}

//how the state managed by redux should be mapped to props using in this container
//since here state is changed internally, but props ARE NOT, we usethe props to map to redux state
const mapStateToProps = state=>{
    return{
        ctr: state.counter // coming from the state from redux
    };
};


const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: () => dispatch({type:'INCREMENT'}),
        onDecrementCounter:() => dispatch({type:'DECREMENT'}),
        onAddCounter:()=>dispatch({type:'ADD'}),
        onSubstractCounter:()=>dispatch({type:'SUBSTRACT'})
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);