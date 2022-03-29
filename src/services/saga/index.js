import { all } from 'redux-saga/effects';
import { weatherSagaWatcher } from '../../screens/reducers/weather/weatherSaga';
import jphReducer from '../../screens/reducers/jph/jphReducer';

export default function* rootSaga() {
  yield all([
    weatherSagaWatcher(),
    jphReducer()
  ])
};