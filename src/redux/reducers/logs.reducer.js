//attached to daily.saga.js
//attached to logger.router.js - router.get LINE 6
const logsReducer = (state = [], action) => {
    console.log('LOGS REDUCER', action.payload);
    
    switch (action.type) {
        case 'SET_LOGS':
            return action.payload;
        default:
            return state;
    }
}

export default logsReducer;