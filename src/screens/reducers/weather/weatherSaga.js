import { takeLatest, put, select, take } from "redux-saga/effects";
import { WEATHER_ACTION_CONST } from "../../../services/const/actionConst";

const {
  WEATHER_API_CALL_ACTION
} = WEATHER_ACTION_CONST;

const addDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000)
  })
};

function* getApiResult (action) {
  console.log("456")
  // yield addDelay();
  // try {

  // } catch (err) {
    
  // }
}

export function* weatherSagaWatcher() {
  yield takeLatest (WEATHER_API_CALL_ACTION, getApiResult)
}

