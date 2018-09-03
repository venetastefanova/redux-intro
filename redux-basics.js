const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}
//========reducer=======
//returns initial state if state is undefined 
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER'){
        return {
             ...state, //copying the state so we dont mutate it
             counter: state.counter + 1 // incrementing the counter with 1
        }
    }
    if (action.type === 'ADD_COUNTER'){
        return {
             ...state, //copying the state so we dont mutate it
             counter: state.counter + action.value // adding the value from the dispatched object
        }
    }
    return state;
};

//========store=========
const store = createStore(rootReducer); // the store is created by passing a reducer
console.log(store.getState()); // shows the current state 

//======subscription=========
//subscriptions are triggered when state changes and returns it to us
store.subscribe(()=>{
    console.log('[Subscription]', store.getState()); 
})

//========dispatching an action=======
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER', value: 10});
console.log(store.getState());


