import axios from 'axios';
import { takeLatest , put} from 'redux-saga/effects';

//attached to logger.router.js router.post LINE 21
function* postNewDailyLog(action) {
    console.log('in postNewDailyLog with', action);
    yield axios({
        method: 'POST',
        url: `/api/dailylogger`,
        data: action.payload
    });
}

//get logs of a specific user
//attached to logger.router.js router.post LINE 6
function * getLogs (action) {
    console.log('getLogs SAGA', action);
    let response= yield axios.get(`/api/dailylogger/user/${action.payload}`);
    console.log('GET LOGS', response.data);
    yield put ({
        type: "SET_LOGS",
        payload: response.data
    })
    
}

function* dailyLoggerSaga() {
    yield takeLatest('POST_LOGS', postNewDailyLog);
    yield takeLatest('FETCH_LOGS', getLogs);
}

export default dailyLoggerSaga;