import { takeLatest, put, select } from "redux-saga/effects";


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

  } catch (err) {
    
  }
}

export function* weatherSagaWatcher() {
  
}
