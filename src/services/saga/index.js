import { all } from 'redux-saga/effects';
import { weatherSagaWatcher } from '../../screens/reducers/weather/weatherSaga';

export default function* rootSaga() {
  yield all([
    weatherSagaWatcher()
  ])
};