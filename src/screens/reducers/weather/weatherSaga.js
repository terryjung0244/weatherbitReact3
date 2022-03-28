import { takeLatest, put, select, take } from "redux-saga/effects";
import { WEATHER_ACTION_CONST } from "../../../services/const/actionConst";
import { weatherReducerWeatherApiCallActionSuccess, weatherReducerWeatherApiCallActionFailure } from "./weatherAction";

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

//d46fe6f3b2e44fb8b52873c21312b71f
//https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely
function* getApiResult (action) {
  
  yield addDelay();

  try {
    let apiResult = yield fetch(`https://api.weatherbit.io/v2.0/current?city=${action.payload.cityName}&country=${action.payload.country}&key=d46fe6f3b2e44fb8b52873c21312b71f`)
    apiResult = yield apiResult.json();
    let organizedData = {
      cityName: apiResult.data[0].city_name,
      countryName: apiResult.data[0].country_code,
      cityWeather: {
        desc: apiResult.data[0].description,
        icon: apiResult.data[0].icon
      }
  }

  yield put(weatherReducerWeatherApiCallActionSuccess(organizedData))

  } catch (err) {
    console.log(err)
    yield put(weatherReducerWeatherApiCallActionFailure(err))
  }
}

export function* weatherSagaWatcher() {
  yield takeLatest (WEATHER_API_CALL_ACTION, getApiResult)
}


