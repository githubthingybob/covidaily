import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

//attached to covid.reducer.js

function* getCOVIDCases(action) {
    console.log('in getCOVIDCases SAGA', action);
    let response= yield axios({
        method: 'GET',
        url: `https://api.covidtracking.com/v1/us/current.json`
    });
    yield put ({
        type: "SET_COVID",
        payload: response.data
    })
}


function* covidSaga() {
    yield takeLatest('FETCH_COVIDATA', getCOVIDCases);
}

export default covidSaga;