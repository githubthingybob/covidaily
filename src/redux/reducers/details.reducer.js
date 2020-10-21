
//connected to editLog.saga.js
//attached to router.get in logger.router LINE 55
const detailsReducer = (state = [], action) => {
    console.log('detailsReducer', action.payload);
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default detailsReducer; 