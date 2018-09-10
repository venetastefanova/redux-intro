import React, { Component } from 'react';
import {connect} from 'react-redux'; // function that returns HOC


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';
class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstractCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult=>(
                        <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

//how the state managed by redux should be mapped to props using in this container
//since here state is changed internally, but props ARE NOT, we usethe props to map to redux state
const mapStateToProps = state=>{
    return{
        ctr: state.counter, // coming from the state from reducer
        storedResults: state.results // coming from the state from the reducer
    };
};


const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter:() => dispatch({type:actionTypes.DECREMENT}),
        onAddCounter:()=>dispatch({type:actionTypes.ADD, val: 10}),
        onSubstractCounter:()=>dispatch({type:actionTypes.SUBTRACT, val:15}),
        onStoreResult:()=>dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult:(id)=>dispatch({type: actionTypes.DELETE_RESULT, resultElementId:id})
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);