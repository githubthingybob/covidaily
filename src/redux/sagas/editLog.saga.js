import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';


//get specific log
function * getDetails (action) {
    console.log('getDetails SAGA', action);
    let response= yield axios.get(`/api/dailylogger/details/${action.payload}`);
    console.log('GETDETAILS for editLogsaga', response.data);
    yield put ({
        type: "SET_DETAILS",
        payload: response.data
    })
    
}

//edit specific log
function* editLog(action) {
    console.log('editLogSAGA', action);
    yield axios({
        method: 'PUT',
        url: `/api/dailylogger/edit/${action.payload}`,
        data: {
            id: action.payload}
    });
}

function* editLogSaga() {
    yield takeLatest('EDIT_LOG', editLog);
    yield takeLatest('FETCH_DETAILS', getDetails);
}
export default editLogSaga;