import { takeLatest, put, select, take } from "redux-saga/effects";
import { JPH_ACTION_CONST } from "../../../services/const/actionConst";

const {JPH_API_CALL_ACTION} = JPH_ACTION_CONST

const addDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000)
  })
};

function* getApiResult (action) {
  console.log("Hello from jphSaga")
}

export function* jphSagaWatcher() {
  yield takeLatest(JPH_API_CALL_ACTION, getApiResult)
}


