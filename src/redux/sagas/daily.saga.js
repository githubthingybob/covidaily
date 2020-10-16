import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';


function* postNewDailyLog(action) {
    console.log('in postNewDailyLog with', action);

    let response = yield axios({
        method: 'POST',
        url: `/api/dailylogger`,
        data: action.payload
    });

    console.log('back from POST newDailyLog with:', response.data);
}


function* dailyLoggerSaga() {
    yield takeLatest('POST_LOGS', postNewDailyLog);
}

export default dailyLoggerSaga;