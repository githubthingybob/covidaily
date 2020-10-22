import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//delete specific log
//attached to logger.router.js router.delete LINE 41
function* deleteLog(action) {
    console.log('deleteLogSAGA', action);
    yield axios({
        method: 'DELETE',
        url: `/api/dailylogger/${action.payload}`,
        data: {
            id: action.payload}
    });
    yield put({
        type: "FETCH_LOGS"
    })
}

function* deleteLogSaga() {
    yield takeLatest('DELETE_LOG', deleteLog);
}
export default deleteLogSaga;