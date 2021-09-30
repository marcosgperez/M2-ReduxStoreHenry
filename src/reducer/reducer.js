
const initialState = {
    counter: 0,
    stateform: []
};

export default function rootReducer (state = initialState, action) {

    switch (action.type) {
        case 'INCREMENT' :
            if (state.counter === 9) return state
            return {
                ...state,
                counter: state.counter + 1
            } 
        case 'DECREMENT' :
            // Flag
            if (state.counter === 0) return state
            return {
                ...state,
                counter: state.counter - 1
            }

        // Form 
        case 'SET_FORM' :
            return {
                ...state,
                stateform: [...state.stateform, action.payload]
            }
        case 'DELETE_FORM' :
            return {
                ...state,
                stateform: [...state.stateform.filter(e=>e.nombre !== action.payload)]
            };

        default :
            return state;
    };
};