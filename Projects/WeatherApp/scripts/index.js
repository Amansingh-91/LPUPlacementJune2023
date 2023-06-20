import { getLocationKey,getWeatherCondition } from "./forcast.js";
import { changeCityName,changeTemp,changeWCondition,changeDay,changeTime } from "./updateUi.js";

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const searchForm = document.querySelector(".search-city");
// getting city from the user using form 
const getCityname = e=>{
    e.preventDefault();
    // console.log(e.target[0].value);
    const city = e.target[0].value.trim();
    if(city !==""){
        getLocationKey(city).then(data=>{
            console.log(data);
            return getWeatherCondition(data);
        }).then(data=>{
            console.log(data);
            changeCityName(data.EnglishName);
            changeTemp(`${data.Temperature.Metric.Value}`);
            changeWCondition(data.WeatherText);
            const curDateAndTime = new Date(data.LocalObservationDateTime);
            console.log(curDateAndTime); 
            const date = curDateAndTime.getDate();
            const month = curDateAndTime.getMonth();
            const year = curDateAndTime.getFullYear();
            const fullDate = `${date}/${month}/${year}`;
            const day = days[curDateAndTime.getDay()];
            const  completeDay = `${day}, ${fullDate}`;
            const time = data.LocalObservationDateTime.substring(11,16);
            changeTime(time);
            changeDay(completeDay);
        });
    }
};


searchForm.addEventListener('submit',getCityname);



