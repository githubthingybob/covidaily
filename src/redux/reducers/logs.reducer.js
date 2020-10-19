
//storing log from DB to send out 
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