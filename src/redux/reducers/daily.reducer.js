const initialState = []


const dailyReducer = (state = initialState, action) => {
    if (action.type === "SET_FEEDBACK") {
        console.log("in feedbackReducer");
        return action.payload;
    }
    return state;
} //end feedbackReducer


export default dailyReducer;