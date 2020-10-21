import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

//attached to user.router.js router.put LINE 49
function* updateUserData (action) {
    console.log('updateUserData saga', action);
    yield axios({
        method: 'PUT',
        url: `/api/user/profile/${action.payload.userID}`,
        data: action.payload
    });
}


function* updateUserSaga() {
    yield takeLatest('UPDATE_ACCOUNT', updateUserData);
}

export default updateUserSaga;