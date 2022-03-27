import React from 'react';
import { cityList } from '../../cityList';
import { useSelector, useDispatch} from 'react-redux';
import { 
  weatherReducerWeatherApiCallAction, 
} from '../reducers/weather/weatherAction'

const WeatherComp = () => {

  const weatherReducerSelector = useSelector(state => state.weatherReducer);

  const dispatch = useDispatch();

  const onClickCityName = (city) => {
    dispatch(weatherReducerWeatherApiCallAction(city))
  }

  console.log(weatherReducerSelector.weatherApiResult.processing)

  return (
    <div>
      <div>
        {cityList.map((city, index) => {
          return (
          <div key={city.cityName} onClick={() => onClickCityName(city)}>
            {city.cityName}
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default WeatherComp;



























