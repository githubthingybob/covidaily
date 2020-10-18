import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';


function* profile (action) {
    console.log('Get profile details', action);
    let response = yield axios({
        method: "GET",
        url: `/api/user/profile/${action.payload.userID}`
    });
    console.log('getProfile in index.js', response.data);
    yield put({
        type: "SET_PROFILE",
        payload: response.data
    });
}

function* profileSaga() {
    yield takeLatest('FETCH_PROFILE', profile);
}

export default profileSaga;