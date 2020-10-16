const initialState = []


const dailyReducer = (state = initialState, action) => {
    if (action.type === "SET_SYMPTOMS") {
        console.log("in fs");
        return action.payload;
    }
    return state;
} //end feedbackReducer


export default dailyReducer;