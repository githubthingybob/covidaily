//data from api
//atached to covid.saga.js
const covidReducer = (state = [], action) => {
    console.log('COVIDREDUCER state', action.payload);
    switch (action.type) {
        case 'SET_COVID':
            return action.payload;
        default:
            return state;
    }
}

export default covidReducer; 