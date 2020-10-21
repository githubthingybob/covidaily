import axios from 'axios';
import { takeLatest , put} from 'redux-saga/effects';


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