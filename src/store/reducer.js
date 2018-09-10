import * as actionTypes from './actions'; // imports the constants

const initialState = {
    counter:0,
    results: []
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
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results:state.results.concat({id: new Date(), value:state.counter}) // dont use push it cases side effects
            }
        case actionTypes.DELETE_RESULT:
            // const id=2;
            // //if the objects in the array have to be changed too, then we need to make copy of them as well
            // const newArray = [...state.results]; //creating a copy of the array from state
            // newArray.splice(id,1);

            //returns the values only if the index is different than the id
            const updatedArray = state.results.filter(result=>result.id !==action.resultElementId);
            return{
                ...state,
                results:updatedArray

            }

    }

    return state; // returns the current state if nothing was met
};

export default reducer;