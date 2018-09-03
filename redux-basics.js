const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}
//========reducer=======
//returns initial state if state is undefined 
const rootReducer = (state = initialState, action) => {
    return state;
};

//========store=========
const store = createStore(rootReducer); // the store is created by passing a reducer
console.log(store.getState()); // shows the current state 



//dispatching an action

//subscription