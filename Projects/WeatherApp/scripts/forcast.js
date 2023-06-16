const key="s3F2OQPJGz2FhTQZ05kqROM3AQG23GxP";



// const weatherConditionUrl = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${key}`

// getting location key for the searched city 
const getLocationKey = async (cityName)=>{
    const locationKeyUlr = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${cityName}`;
    const res = await fetch(locationKeyUlr);
    const data = await res.json();
    // console.log(data);
    return data[0];
}
// getting the current weather condition for the specific location key
const getWeatherCondition = async (cityData)=>{
    const weatherConditionUrl = `http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${key}`;
    const res =  await fetch(weatherConditionUrl);
    const data = await res.json();
    // console.log(data);
    data[0].EnglishName = cityData.EnglishName;
    return data[0];
}








export {getLocationKey,getWeatherCondition};