import { getLocationKey,getWeatherCondition } from "./forcast.js";
import { changeCityName,changeTemp,changeWCondition,changeDay,changeTime } from "./updateUi.js";

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
        });
    }
};


searchForm.addEventListener('submit',getCityname);



