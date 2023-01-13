import {call, put} from 'redux-saga/effects';
import axios from 'axios';

function* fetchData() {
    try {
        const response = yield call(axios.get, 'https://api.coincap.io/v2/assets');
        yield put({ type: 'FETCH_DATA_SUCCESS', data :response.data});
    } catch (error) {
        yield put({ type: 'FETCH_DATA_FAILURE', error});
    }
}

export default fetchData;