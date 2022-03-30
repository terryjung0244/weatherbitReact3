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

