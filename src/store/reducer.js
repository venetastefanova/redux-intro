const initialState = {
    counter:0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            const newState = Object.assign({}, state)//copies the state to new object - immutable state now
            newState.counter = state.counter+1;
            return newState;

        case 'DECREMENT':
            return{
                ...state,
                counter:state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter:state.counter+action.val
            }
        case 'SUBSTRACT':
            return {
                ...state,
                counter:state.counter-action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results:state.results.concat({id: new Date(), value:state.counter}) // dont use push it cases side effects
            }

    }

    return state; // returns the current state if nothing was met
};

export default reducer;