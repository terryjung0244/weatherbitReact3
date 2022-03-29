import React from 'react';
import { cityList } from '../../cityList';
import { useSelector, useDispatch} from 'react-redux';
import { 
  weatherReducerWeatherApiCallAction, 
} from '../reducers/weather/weatherAction'
import LoadingComponent from './reusable/LoadingComp';

const WeatherComp = () => {

  const weatherReducerSelector = useSelector(state => state.weatherReducer);

  const dispatch = useDispatch();

  const onClickCityName = (city) => {
    dispatch(weatherReducerWeatherApiCallAction(city))
  }

  const onClickJph = () => {

  }

  console.log(weatherReducerSelector.weatherApiResult.processing)
  console.log(weatherReducerSelector.weatherApiResult.result)

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
      <div>
        {(weatherReducerSelector.weatherApiResult.processing === true)
        ?
          <LoadingComponent/>
        :
          null
        }
      </div>
      <div onClick={onClickJph}>
        Click Me
      </div>
    </div>
  )
}

export default WeatherComp;



























