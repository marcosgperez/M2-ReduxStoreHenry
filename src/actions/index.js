
// Counter

export function getCount () {
    return {
        type: 'GET_COUNTER',
    };
};

export function setCount (payload) {
    if (payload === 'increment') {
        return {
            type: 'INCREMENT'
        }
    }
    if (payload === 'decrement') {
        return {
            type: 'DECREMENT'
        }
    }
};

export function increment () {
    return {
        type: 'INCREMENT',
    };
};

export function decrement () {
    return {
        type: 'DECREMENT',
    };
};




// Form 

export function setForm (payload) {
    return {
        type: 'SET_FORM',
        payload
    }
};

export function deleteForm (payload) {
    return {
        type: 'DELETE_FORM',
        payload
    }
};