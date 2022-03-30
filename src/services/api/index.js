const fetchFunc = (url, method, body) => {
  let apiResult = await fetch(
    `${url}`,
    {
      method: method, 
      body: body
    }
  );

  apiResult = await apiResult.json();
  return apiResult;
} ;

export const getWeatherApi = async (param) => {
  let url = `https://api.weatherbit.io/v2.0/current?city=${param.cityName}&country=${param.country}&key=d46fe6f3b2e44fb8b52873c21312b71f`;
  
  try {
    let result = await fetchFunc(url, 'GET', null);
  } catch (err) {
    return result
  }
}

