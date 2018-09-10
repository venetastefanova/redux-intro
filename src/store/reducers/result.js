import * as actionTypes from '../actions'; // imports the constants

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results:state.results.concat({id: new Date(), value:action.result}) // dont use push it cases side effects
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