import { takeLatest, put, select, take } from "redux-saga/effects";

const addDelay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 2000)
  })
};

function* getApiResult (action) {
  
}

export function* jphSagaWatcher() {

}


