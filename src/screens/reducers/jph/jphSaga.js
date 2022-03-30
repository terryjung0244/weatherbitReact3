import { takeLatest, put, select, take } from "redux-saga/effects";
import { getJphApi } from "../../../services/api";
import { JPH_ACTION_CONST } from "../../../services/const/actionConst";
import { jphReducerJphApiCallActionSuccess, jphReducerJphApiCallActionFailure } from "./jphAction";

const {JPH_API_CALL_ACTION} = JPH_ACTION_CONST

const addDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000)
  })
};

function* getApiResult (action) {
  yield addDelay();
  try {
    let apiResult = yield getJphApi(action.payload)

    let test = yield fetch('~~', {
      method:'', 
      body:'',
    })

    yield put(jphReducerJphApiCallActionSuccess(apiResult))
  } catch (err) {
    // console.log(err)
    yield put(jphReducerJphApiCallActionFailure(err))
  }
}

export function* jphSagaWatcher() {
  yield takeLatest(JPH_API_CALL_ACTION, getApiResult)
}
