import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

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
}

function* deleteLogSaga() {
    yield takeLatest('DELETE_LOG', deleteLog);
}
export default deleteLogSaga;