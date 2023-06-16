{/* <h1 class="city">Delhi</h1>
<h2 class="temp">32</h2>
<h5 class="wCondition">sunny windy</h5> */}

const city =  document.querySelector(".city");
const temp =  document.querySelector(".temp");
const wCondition =  document.querySelector(".wCondition");
const wDay =  document.querySelector(".wDay");
const wTime =  document.querySelector(".wTime");

const changeCityName =(cityname)=>{
    city.textContent = cityname;
}
const changeTemp =(newTemp)=>{
    temp.textContent = newTemp;
}

const changeWCondition =(wCond)=>{
    wCondition.textContent = wCond;
}

const changeDay =(newDay)=>{
    wDay.textContent = newDay;
}
const changeTime =(newTime)=>{
    wTime.textContent = newTime;
}

export {changeCityName,changeTemp,changeWCondition,changeDay,changeTime};