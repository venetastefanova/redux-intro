import * as actionTypes from '../actions'; // imports the constants

const initialState = {
    counter:0,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state)//copies the state to new object - immutable state now
            newState.counter = state.counter+1;
            return newState;

        case actionTypes.DECREMENT:
            return{
                ...state,
                counter:state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter:state.counter+action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter:state.counter-action.val
            }
    }

    return state; // returns the current state if nothing was met
};

export default reducer;